class GamesController < ApplicationController
    before_action :authorize
    
    def index
        games = current_user.games
        render json: games
    end
    #current user object, current user's games
    #work off the current_user, not the model
    #AR assoc. gives us security, it only gives "me" "mygames"

    def create
        game = current_user.games.create(game_params)
        if game.valid? 
            render json: game
        else
            render json: { errors: game.errors.full_messages }, status: :unprocessable_entity
    end

    def show
        game = current_user.games.find_by(id: params[:id])
        if game 
            render json: game 
        else
            render json: { error: "Not Found"}, status: :unauthorized
    end
    #find by returns null if it cant find one
    #if you did Game.find_by we would violate it

    def destroy
    end
    #delete their game

    def update
    end
    #update their game

    private

    def current_user
        User.find_by(id: session[:user_id])
    end
#current user is in the session
#returns current user object 

    def game_params
        params.permit(:time, :bring_ball, :skill_level, :contact_info)
    end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id   
    end
    #runs this method before any action happens
    #checks the condition if they are authorized, if there is an authorized user
    #if the sessions DOES not inlude user_id please do this
    #if not do nothing
    #if logged in they are authorized

end

#full crud in here