Rails.application.routes.draw do
  
#sessions ctrllr
 post "/login", to: "sessions#create" 
 delete "/logout", to: "sessions#destroy"

#users ctrllr
 post "/signup", to: "users#create" 
 get "/me", to: "users#show"

#challenge 
get "/test" , to: "courts#number"

#challenge2
get "courts/search/:term", to: "courts#search"

#challenge3
get "/court/top", to: "courts#top"

#challenge4
get "/top/:n", to: "courts#top"

#challenge5
get '/court/find', to: 'courts#find'

#challenge5
get '/court/cupcake', to: 'courts#cupcake'

#challeng6
get '/game/cheese', to: 'games#cheese'


#challeng6
get '/court/cheese', to: 'courts#cheese'


#For example, if you had an application of a book app where you could review books. The challenge could be something like:

#Make a GET route for '/book_reviews/:n' to the books controller book_reviews action.

#In the book_review_action, return all the books that has n or more reviews as json.

#make my challenge for n or more games
#look at notes from J

#You could use activerecord for this or ruby for this.

#put other custom challenges here


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