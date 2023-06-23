Rails.application.routes.draw do
  
 post "/login", to: "sessions#create" 
 delete "/logout", to: "sessions#destroy"

 post "/signup", to: "users#create" 
 get "/me", to: "users#show"

 #challenge
 get '/courts_games/:n', to: "courts#courts_games"

resources :users
resources :courts
resources :games 

# Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
