Rails.application.routes.draw do
  
#sessions ctrllr
 post "/login", to: "sessions#create" 
 delete "/logout", to: "sessions#destroy"

#users ctrllr
 post "/signup", to: "users#create" 
 get "/me", to: "users#show"

resources :users
resources :courts
resources :games 

# Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


#show #me
 #whoami shows who is logged in and who the user is aka show route not seen by user
 #it is for react so it knows who the user is and the users show page

 # , only: [:index] 
#used to have the above on :users line 11 idk if I need it or if I do not