Rails.application.routes.draw do
  devise_for :users,
             controllers: {
                 sessions: 'api/sessions',
                 registrations: 'api/registrations'
             }

  namespace :api do
    get "/webhook", to: "zoom#webhook"
    get "/request_access_token", to: "zoom#request_access_token"
    get "/redirect", to: "zoom#redirect", as: :redirect
    get "/code", to: "zoom#code"
    namespace :user do
      resources :event_zooms
    end
  end
end
