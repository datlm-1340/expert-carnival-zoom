class Api::User::EventZoomsController < Api::BaseController
  respond_to :json

  EVENT_ZOOM_ATTRS = [:id, :metting_id, :metting_name, :metting_pw, :start_url, :url]
  EVENT_ZOOM_METHODS = [:signature]

  def index
    event_zooms = EventZoom.all.as_json(
      only: EVENT_ZOOM_ATTRS,
      except: current_user.user? ? [:metting_pw, :start_url] : []
    )

    render_json(event_zooms, :ok)
  end

  def show
    event_zoom = EventZoom.find(params[:id]).as_json(
      only: EVENT_ZOOM_ATTRS,
      methods: EVENT_ZOOM_METHODS
    )

    render_json(event_zoom, :ok)
  rescue
    render_json({}, :not_found)
  end
end
