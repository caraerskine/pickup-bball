class UsersController < ApplicationController

#POST /signup
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

#GET /me 
#get current user, render it in json 
    def show
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user            
        else
            render json: {error: "Not Authorized"}, status: :unauthorized     
        end
    end    

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end

#user_params strong params 

#which line of code is the line of code that logs the user in?
#where their ID gets added to the session which is line 7 here BOOM
#the user id from the successfully created user object
#render json give back the user i just createad