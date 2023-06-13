class CourtsController < ApplicationController        
    before_action :authorize
    skip_before_action :authorize, only: [:index, :number, :search, :top, :find, :cupcake, :cheese]
            
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

        # def top
        #     court = Court.left_joins(:games).group('courts.id').order('COUNT(games.id) DESC').limit(1).first
        #     render json: court
        # end

        # courts = Court.left_joins(:games).group('courts.id').order('COUNT(games.id) DESC').limit(n)

          
        def top
            n = params[:n].to_i
            courts = Court.joins(:games).group(:id).having('COUNT(games.id) >=?', n)
            render json: courts
        end
        #above is render the games on my courts depending on :n which is the number of games
        #so if :n is 2 it will render all the games on the courts with 2 games or more
        #likewise if it is 4 it will render all the games on the courts with 4 or more games
          

        #if you have a court and you know its street
        #find the court that includes that street
        #Remember it is street not name
        #Find the street with the characters "oy"
        def cupcake
            street = params[:street]
            court = Court.find_by("street LIKE ?", "%oy%")
            render json: court
        end


        #if you have a court and you know its park
        #find the court that includes that park
        #Remember it is park not name
        def find
            park = params[:park]
            court = Court.find_by("park LIKE ?", "%#{park}%")
            render json: court
        end
          

        #how do I return to the front end the 
        #courts where it the street 
        #games where the skill level is greater than 5
        def cheese
            courts = Court.where("street LIKE ?", "%oh%")
            filtered_courts = courts.map do |court|
              games = court.games.where("skill_level :: integer > ?", 1)
              { court: court, games: games }
            end
            render json: filtered_courts
        end
          

        #how to filter out the games in those courst and return that array of courts
        #and how do you get that court and find only one court that matches ro
        #how do you filter out the games with a skill_level greater than 5

        #eplained above -- 'Court.where("skill_level > ?", 5) gets all the courts
        #with a skill level greater than 5. 
        #Then the 'map' method is used to iterate over each court and retrive the games
        #with a skill level greater than 5 using 'court.games.where("skill_level > ?", 5)
        #result is an array of hashes and each has contains the court object and the 
        #corresponding filtered games. Finally, the 'filtered_courts' array is rendered
        #as JSON in the resposne. 



        #where returns a certain list of things
        #filter out the array of courts witha skill_level greater than 5
        #can you map over the courts and return the games where the skill level is greater than 5
        #court.map

        #find courts where teh court incldues the "ro" string
        #then use the where method on the courts' games
        def number
            court = Court.where("park Like ? ", "%ro%")
            # games = 
            # court = Court.includes(:games).where(["park LIKE ? and games.skill_level > ?" , "%ro%", ]).references(:games)
            # court = Court.includes(:games).where("games.skill_level > '7'").references(:games)
            #use above code, how would you now filter for parks that include ro?
            # court = Court.includes(:games).where(games: { skill_level: '10'})
            # court = Court.where("skill_level > '5'")            
            render json: court      
        end

        def search
            courts = Court.where("lower(park) LIKE ?", "%" + params[:term].downcase + "%")
            render json: courts
        end
        



        private
        
        def court_params
                params.permit(:park, :neighborhood, :street, :notes)
        end        

end
