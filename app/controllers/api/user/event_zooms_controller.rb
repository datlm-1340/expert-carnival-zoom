class Api::User::EventZoomsController < Api::BaseController
  respond_to :json

  EVENT_ZOOM_ATTRS = [:metting_id, :metting_name, :metting_pw, :start_time, :end_time, :url]

  def index
    event_zooms = EventZoom.all.as_json(only: EVENT_ZOOM_ATTRS)

    render_json(event_zooms, :ok)
  end
end
