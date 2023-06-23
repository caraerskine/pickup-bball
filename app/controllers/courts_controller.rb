class CourtsController < ApplicationController        
    skip_before_action :authorize, only: [:index, :courts_games]
            
    def index
        render json: Court.all
    end
    
    def create
        court = Court.create!(court_params)
        render json: court, status: :created
    end
    
    def show
        court = Court.find(params[:id])
        render json: court
    end

#courts_games 
#if we go there courts_games/3 
#render the json of the courts that have 3 or more games
#filter returns the filtered array based on the condition
#return me if true the courts that have 3 or more games
#all the courts

#what if it were /4
#/:n
 
    def courts_games
       courts_games = Court.all.filter do |court|
        court.games.length >= params[:n].to_i 
       end 
        render json: courts_games     
    end
    
    private
    
    def court_params
            params.permit(:park, :neighborhood, :street, :notes)
    end        

end
