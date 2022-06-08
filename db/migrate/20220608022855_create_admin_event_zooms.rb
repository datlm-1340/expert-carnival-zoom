class CreateAdminEventZooms < ActiveRecord::Migration[7.0]
  def change
    create_table :admin_event_zooms do |t|
      t.integer :user_id
      t.integer :event_zoom_id

      t.timestamps
    end
  end
end
