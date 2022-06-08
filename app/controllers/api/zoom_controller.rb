class Api::ZoomController < Api::BaseController
  include ZoomConcern

  def request_access_token
    if params[:code].present?
      response = authorization(params[:code])
      
      if response[:status].success?
        current_user.zoom_access_token.destroy

        ZoomAccessToken.create access_token: response[:body]["access_token"],
          refresh_token: response[:body]["refresh_token"],
          admin_id: current_user.id
      end
    else
      response = refresh_token(current_user.zoom_access_token.refresh_token)
      current_user.zoom_access_token.update access_token: response[:body]["access_token"]
    end

    render json: response[:body], status: response[:status].code
  end

  def create_meetings
    response = create_meeting
    render json: response[:body], status: response[:status]
  end
end