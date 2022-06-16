class Api::User::EventZoomsController < Api::BaseController
  respond_to :json

  EVENT_ZOOM_ATTRS = [:id, :metting_id, :metting_name, :metting_pw, :start_url, :url]
  EVENT_ZOOM_METHODS = [:signature]

  def index
    event_zooms = EventZoom.all.order(created_at: :desc).as_json(
      only: EVENT_ZOOM_ATTRS,
      except: current_user.user? ? [:metting_pw, :start_url] : []
    )

    render_json(event_zooms, :ok)
  end

  def show
    event_zoom = EventZoom.find_by(id: params[:id])

    return render_json(event_zoom, :ok) unless event_zoom

    result = {
      id: event_zoom.id,
      metting_id: event_zoom.metting_id,
      metting_name: event_zoom.metting_name,
      metting_pw: event_zoom.metting_pw,
      start_url: event_zoom.start_url,
      url: event_zoom.url,
      signature: get_signature(event_zoom),
      user_email: current_user.email,
      user_name: "[#{current_user.role}] #{current_user.email}",
      user_id: current_user.id
    }

    render_json(result, :ok)
  end

  private

  def get_signature event_zoom
    iat = Time.now.to_i - 30;
    exp = iat + 60 * 60 * 2
    header = { alg: 'HS256', typ: 'JWT' }
    payload = {
      sdkKey: Settings.zoom.sdk_key,
      mn: event_zoom.metting_id,
      role: current_user.user? ? 0 : 1,
      iat: iat,
      exp: exp,
      appKey: Settings.zoom.sdk_key,
      tokenExp: exp
    }

    JWT.encode(payload, Settings.zoom.sdk_secret, 'HS256', header)
  end
end
