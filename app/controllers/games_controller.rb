class GamesController < ApplicationController
    before_action :authorize
    before_action :authorize_user, except: [:index, :create]
   
    #old style
    def create
        game = current_user.games.create(game_params)
        render json: game, status: :created
    end

     # went off model of Game instead of current_user IDFK
    #new thought but maybe not cuz it is going off model
    # def create
    #     game = Game.create!(game_params)
    #     render json: game, status: :created
    # end
   

    #old nancy style
    def index
        games = current_user.games
        render json: games
    end
    #current user object, current user's games
    #work off the current_user, not the model
    #AR assoc. gives us security, it only gives "me" "mygames"

    #new ? not sure because this is working off the model but can i do that
    # def index
    #     render json: Game.all
    # end


    def show
        game = current_user.games.find_by(id: params[:id])
        render json: game 
    end
      #find by returns null if it cant find one
    #if you did Game.find_by we would violate it

    #new idea poss?
    # def show
    #     game = Game.find(params[:id])
    #     render json: game
    # end
  

    def update
        game = Game.find(params[:id])
        game.update!(game_params)
        render json: game
    end
    #update the user's game
    #i am going to try current_user instead of Game ok nvrmnd

    def destroy
        game = Game.find(params[:id])
        game.destroy
        head :no_content
    end
    #delete the user's game
    # i am going to try current_user instead of Game ok nvrmnd

    private

    def current_user
        User.find_by(id: session[:user_id])
    end
#current user is in the session
#returns current user object 

    def game_params
        params.permit(:time, :bring_ball, :skill_level, :contact_info, :user_id, :court_id)
    end

    def authorize
        user_id = session[:user_id]
        game = Game.find(params[:id])
        return render json: {error: "You are not authorized to edit this game"}, status: :unauthorized unless session.include? :user_id   
    end

    #old return
    # return render json: {error: "You are not authorized to edit this game"}, status: :unauthorized unless session.include? :user_id   

    #runs this method before any action happens
    #checks the condition if they are authorized, if there is an authorized user
    #if the sessions DOES not inlude user_id please do this
    #if not do nothing
    #if logged in they are authorized
end

#full crud in here