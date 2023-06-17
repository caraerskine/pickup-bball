class GamesController < ApplicationController
    before_action :authorize
   
    def create
        game = Game.create!(game_params)
        render json: game, status: :created
    end

    def index
        render json: Game.all
    end
  

    def show
        game = Game.find(params[:id])
        render json: game
    end
    
    def update
        game = @current_user.games.find(params[:id])
        game.update!(game_params)
        render json: game
    end

    def destroy
        game = @current_user.games.find(params[:id])
        game.destroy
        head :no_content
    end


    private

    def game_params
        params.permit(:time, :bring_ball, :id, :skill_level, :contact_info, :user_id, :court_id)
    end
  
end

