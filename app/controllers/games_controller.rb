class GamesController < ApplicationController
    before_action :authorize
    
    def index

    end

    def create
    end

    #will we get to show
    def show
    end

    def destroy
    end
    #delete their game

    def update
    end
    #update their game

    private

    def game_params
        params.permit(:time, :bring_ball, :skill_level, :contact_info)
    end

    def authorize

    end
    #runs this method before any action

end

#full crud in here