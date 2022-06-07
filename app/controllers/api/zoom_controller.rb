class Api::ZoomController < Api::BaseController
  def code
    redirect_to "https://zoom.us/oauth/authorize?response_type=code&client_id=z8Yvq0bxQbaGlrRCc7C2Tw&redirect_uri=https%3A%2F%2Fthirdeachlicense.hungkieu.repl.co%2Fwebhook", allow_other_host: true
  end
  
  def webhook
    session[:code] = params[:code] if params[:code].present?
    render json: params
  end

  def request_access_token
    if session[:code].blank?
      return render json: {
        message: "Code is not found"
      }
    end
    
    client_id = "z8Yvq0bxQbaGlrRCc7C2Tw"
    client_secret = "O4lZNRHp11vz28flyWgFx2708e8kr51L"
    
    authorization = Base64.strict_encode64("#{client_id}:#{client_secret}")

    headers = {
      "Authorization" => "Basic #{authorization}",
      "Content-Type" => "application/x-www-form-urlencoded"
    }
    
    response = HTTP
      .headers(headers)
      .post(
        "https://zoom.us/oauth/token",
        form: {
          code: session[:code],
          grant_type: "authorization_code",
          redirect_uri: redirect_url
        }
      )

    render json: response.body
  end

  def redirect
    pp params
    render json: params
  end
end