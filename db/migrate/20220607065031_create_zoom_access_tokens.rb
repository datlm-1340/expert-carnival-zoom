class CreateZoomAccessTokens < ActiveRecord::Migration[7.0]
  def change
    create_table :zoom_access_tokens do |t|
      t.integer :admin_id
      t.text :access_token
      t.text :refresh_token

      t.timestamps
    end
    add_index :zoom_access_tokens, :admin_id
  end
end
