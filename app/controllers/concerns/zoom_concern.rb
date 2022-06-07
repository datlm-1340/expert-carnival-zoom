module ZoomConcern
  extend ActiveSupport::Concern
  
  def authorization code
    Zoom::Authorization.new.authorization(code)
  end

  def refresh_token token
    Zoom::Authorization.new.refresh_token(token)
  end
end