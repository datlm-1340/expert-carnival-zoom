module ZoomConcern
  extend ActiveSupport::Concern
  
  def authorization code
    Zoom::Authorization.new.authorization(code)
  end

  def refresh_token token
    Zoom::Authorization.new.refresh_token(token)
  end

  def create_meeting access_token = nil
    token = access_token || current_user.zoom_access_token.access_token
    response = Zoom::Meeting.new(token).create_meeting params
    return response unless response[:status].success?

    current_user.event_zooms.create metting_id: response[:body]["id"],
      metting_pw: response[:body]["password"],
      metting_name: response[:body]["topic"],
      url: response[:body]["join_url"],
      start_url: response[:body]["start_url"]

    response
  end
end