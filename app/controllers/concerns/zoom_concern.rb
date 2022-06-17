module ZoomConcern
  extend ActiveSupport::Concern

  def authorization code
    Zoom::Authorization.new.authorization(code)
  end

  def refresh_token token
    Zoom::Authorization.new.refresh_token(token)
  end

  def create_meeting access_token = nil
    token = access_token || ZoomAccessToken.last.access_token
    response = create_meeting_zoom token, params

    if response[:status] == 401
      update_token

      response = create_meeting_zoom ZoomAccessToken.last.access_token, params
    end

    return response unless response[:status].success?

    current_user.event_zooms.create metting_id: response[:body]["id"],
      metting_pw: response[:body]["password"],
      metting_name: response[:body]["topic"],
      url: response[:body]["join_url"],
      start_url: response[:body]["start_url"]

    response
  end

  def create_meeting_zoom token, params
    Zoom::Meeting.new(token).create_meeting params
  end

  def update_token
    get_token = refresh_token(ZoomAccessToken.last.refresh_token)
    zoom_access_token = ZoomAccessToken.last.refresh_token.update(
      access_token: get_token[:body]["access_token"],
      refresh_token: get_token[:body]["refresh_token"]
    )
  end
end
