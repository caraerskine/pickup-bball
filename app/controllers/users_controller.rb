class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index] 
    #my friend and i were not sure if this should be in there, line 3 ", only: [:create, :index]"

#POST /signup
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}
            # , status: :unprocessable_entity  -- not sure if i need this line back on line 13
        end
    end

    def index
        user = User.create(user_params)
        if user.valid?
            render json: User.first
        end
        # render json: User.all
        #or 
        # user = User.all
        # render json: user
    end

#GET /me 
#get current user, render it in json 
    def show
        user = User.find_by(id: session[:user_id])
        # byebug
        if user
            render json: user, status: :ok
        else
            render json: {errors: user.errors.full_messages}, status: :unauthorized            
        end    
    end


    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end

#user_params strong params 
#do i need :name on line 33 (?) i dont but 

#which line of code is the line of code that logs the user in?
#where their ID gets added to the session which is line 7 here BOOM
#the user id from the successfully created user object
#render json give back the user i just createad