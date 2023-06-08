class CourtsController < ApplicationController        
    before_action :authorize
    skip_before_action :authorize, only: [:index, :number]
            
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
        
        def update
            court = Court.find(params[:id])
            court.update!(court_params)
            render json: court
        end

        #write a method to find the court 
        #that has the most games
        #.where 
        #has the most games 
        #Court.all is an array
        #mapping over the array of courts, each court is an object
        #array how many elemets in the array

        #if you have a court and you know its name
        #find the court that includes that name

        #find courts where teh court incldues the "ro" string
        #then use the where method on the courts' games

        #how do I return to the front end the 
        #games where the skill level is greater than 5

        #how to filter out the games in those courst and return that array of courts
        #and how do you get that court and find only one court that matches ro
        #how do you filter out the games with a skill_level greater than 5

        #where returns a certain list of things
        #filter out the array of courts witha skill_level greater than 5
        #can you map over the courts and return the games where the skill level is greater than 5
        #court.map

        def number
            # court = Court.where("park Like ? ", "%ro%")
            # games = 
            # court = Court.includes(:games).where(["park LIKE ? and games.skill_level > ?" , "%ro%", ]).references(:games)
            court = Court.includes(:games).where("games.skill_level > '7'").references(:games)
            #use above code, how would you now filter for parks that include ro?
            # court = Court.includes(:games).where(games: { skill_level: '10'})
            # court = Court.where("skill_level > '5'")            
            render json: court      
        end
        


        private
        
        def court_params
                params.permit(:park, :neighborhood, :street, :notes)
        end        

end
