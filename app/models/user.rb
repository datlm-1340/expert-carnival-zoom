class User < ApplicationRecord
  has_one :zoom_access_token, foreign_key: :admin_id
  has_many :admin_event_zooms
  has_many :event_zooms, through: :admin_event_zooms

  devise :database_authenticatable, :registerable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  enum role: {user: 0, admin: 1}
end
