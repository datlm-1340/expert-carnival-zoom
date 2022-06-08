class ChangeEventZooms < ActiveRecord::Migration[7.0]
  def change
    add_column :event_zooms, :start_url, :text
  end
end
