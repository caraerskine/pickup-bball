class CourtsController < ApplicationController        
    before_action :authorize
    skip_before_action :authorize, only: [:index]
            
        def index
            render json: Court.all
        end
        
        def create
            court = Court.create!(bird_params)
            render json: court, status: :created
        end
        
        def show
            court = Court.find(params[:id])
            render json: court
        end
        
        def update
            court = Court.find(params[:id])
            court.update!(court_params)
            render json: court
        end
        
        private
        
        def Court_params
                params.permit(:park, :neighborhood, :street, :notes)
        end        

end
