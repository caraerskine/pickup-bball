# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
class FallbackController < ActionController::Base

  def index
    # React app index page
    
    # render file: './client/public/index.html' 
    #^ the above was in my friend's project so I am not sure if mine is messed up or not
    
    render file: 'public/index.html'
  end
end

#render is failing, why?