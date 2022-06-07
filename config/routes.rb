Rails.application.routes.draw do
  devise_for :users,
             controllers: {
                 sessions: 'api/sessions',
                 registrations: 'api/registrations'
             }

  namespace :api do
    scope :zoom do
      get "/request_access_token", to: "zoom#request_access_token"
    end
  end
end
