class GamesController < ApplicationController
   
    def create
        game = @current_user.games.create!(game_params)
        render json: game, status: :created
    end

    def index
        render json: @current_user.games
    end
  
    def show
        game = @current_user.games.find(params[:id])
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
        params.permit(:time, :bring_ball, :skill_level, :contact_info, :court_id)
    end
  
end

