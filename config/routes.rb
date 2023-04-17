Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

#sessions ctrllr
 post "/login", to: "sessions#create" 
 delete "/logout", to: "sessions#destroy"

#users ctrllr
 post "/signup", to: "users#create" 
 get "/me", to: "users#show"

resources :games 
resources :courts

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

#show #me
 #whoami shows who is logged in and who the user is aka show route not seen by user
 #it is for react so it knows who the user is and the users show page