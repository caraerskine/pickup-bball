class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index] 

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}
        end
    end

    def index
        user = User.create(user_params)
        if user.valid?
            render json: User.first
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
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

