class CreateEventZooms < ActiveRecord::Migration[7.0]
  def change
    create_table :event_zooms do |t|
      t.string :metting_name
      t.string :metting_pw
      t.datetime :start_time
      t.datetime :end_time
      t.string :url

      t.timestamps
    end
  end
end
