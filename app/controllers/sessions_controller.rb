class SessionsController < ApplicationController

   #create a session when you login
   #destroy a session when you logout

   ###FIX
   ###FIX
  # IMPORTANT sesh_params and private is messed up fix

    #login  
    def create
        user = User.find_by(sesh_params)
        if user&.authenticate(sesh_params)
            session[:user_id] = user.id
            render json: user 
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end 

    #logout
    def destroy
        session.clear
    end

    private

    def sesh_params
        params.permit(:username, :password)
    end


end

#allows us to show that a user is logged in
#IMPORTANT
#make strong params later w private
#brcrypt and AR gives us .authenticate

#same as if saying user && user.authenticate

#login is line 10
#render user object back on 11