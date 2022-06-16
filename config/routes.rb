Rails.application.routes.draw do
  devise_for :users,
             controllers: {
                 sessions: 'api/sessions',
                 registrations: 'api/registrations'
             }

  namespace :api do
    namespace :user do
      resources :event_zooms
    end

    scope :zoom do
      get "/get_access_token", to: "zoom#get_access_token"
      get "/request_access_token", to: "zoom#request_access_token"
      get "/participants", to: "zoom#participants"
      post "/meetings", to: "zoom#create_meetings"
    end
  end
end
