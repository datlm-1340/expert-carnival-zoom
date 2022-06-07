class AddMeetingIdToEventZooms < ActiveRecord::Migration[7.0]
  def change
    add_column :event_zooms, :metting_id, :string
  end
end
