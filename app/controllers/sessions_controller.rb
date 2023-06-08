class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

   #create a session when you login
   #destroy a session when you logout

    #login  
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password]) #if user and user.authenticate
            # byebug
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end 

    #logout
    def destroy
        session.destroy
        head :no_content
    end
end

#allows us to show that a user is logged in
#IMPORTANT
#brcrypt and AR gives us .authenticate

#same as if saying user && user.authenticate

#login is line 10
#render user object back on 12 (11 if no byebug)