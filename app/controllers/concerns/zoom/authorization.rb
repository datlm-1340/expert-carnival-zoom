class Zoom::Authorization
  OAUTH_URL = "https://zoom.us/oauth/token"

  def initialize ci = nil, cs = nil
    client_id = ci || Settings.zoom.client_id
    client_secret = cs || Settings.zoom.client_secret
    authorization = Base64.strict_encode64("#{client_id}:#{client_secret}")
    headers = {
      "Authorization" => "Basic #{authorization}",
      "Content-Type" => "application/x-www-form-urlencoded"
    }
    @http = HTTP.headers(headers)
  end

  def authorization code
    response = http.post(
      OAUTH_URL,
      form: {
        code: code,
        grant_type: "authorization_code",
        redirect_uri: "https://c1df-1-52-125-159.ap.ngrok.io/code"
      }
    )

    { status: response.status, body: JSON.parse(response.to_s).with_indifferent_access }
  end

  def refresh_token token
    response = http.post(
      OAUTH_URL,
      form: {
        refresh_token: token,
        grant_type: "refresh_token"
      }
    )

    { status: response.status, body: JSON.parse(response.to_s).with_indifferent_access }
  end

  private

  attr_accessor :http
end
