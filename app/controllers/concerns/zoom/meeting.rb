class Zoom::Meeting
  URL = "https://api.zoom.us/v2/users/%s/meetings"

  def initialize access_token
    headers = {
      "Authorization" => "Bearer #{access_token}",
      "Content-Type" => "application/json"
    }
    @http = HTTP.headers(headers)
  end

  def create_meeting params
    user_id = params[:userId]
    url = URL % user_id

    puts url

    response = http.post(
      url,
      json: {
        agenda: params[:agenda],
        password: params[:password],
        settings: {
          allow_multiple_devices: params[:allow_multiple_devices],
          approval_type: params[:approval_type],
          calendar_type: 1,
          email_notification: true,
          encryption_type: "enhanced_encryption",
          focus_mode: true,
          host_video: true,
          jbh_time: 0,
          join_before_host: true,
          meeting_authentication: true,
          mute_upon_entry: false,
          participant_video: false,
          private_meeting: params[:private_meeting],
          show_share_button: true,
          host_save_video_order: true,
        },
        topic: params[:topic],
        type: 1
      }
    )

    { status: response.status, body: JSON.parse(response.to_s).with_indifferent_access }
  end

  private

  attr_accessor :http
end
