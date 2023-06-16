class GamesController < ApplicationController
    before_action :authorize
    # before_action :authorize_user, except: [:index, :create]

    #only for test challenge
    skip_before_action :authorize, only: [:cheese]
            
   
    #old style
    def create
        # game = Game.create!(game_params)
        # render json: game, status: :created
        #ok or --
        game = Game.create!(game_params)
        render json: game, status: :created
    end
#@current_user.games
     # went off model of Game instead of current_user IDFK
    #new thought but maybe not cuz it is going off model
    # def create
    #     game = Game.create!(game_params)
    #     render json: game, status: :created
    # end
   

    #old nancy style
    def index
        render json: Game.all
        #or --
        # game = current_user.games
        # render json: game
    end
    #*****
    #I HAD THIS AS GAMES PLURAL WAS THAT THE PROBLEM IDK
    #*****
    #current user object, current user's games
    #work off the current_user, not the model
    #AR assoc. gives us security, it only gives "me" "mygames"

    #new ? not sure because this is working off the model but can i do that
    # def index
    #     render json: Game.all
    # end

    def show
        game = Game.find(params[:id])
        render json: game
        #or --
        # game = current_user.games.find_by(id: params[:id])
        # render json: game 
    end
      #find by returns null if it cant find one
    #if you did Game.find_by we would violate it

    #new idea poss?
    # def show
    #     game = Game.find(params[:id])
    #     render json: game
    # end

     #return the game where the skill level is greater than 9 and the 
     # is greater than 3 pm
        def cheese
            games = Game.where("skill_level :: integer > ?", 9)
            filtered_games = games.select { |game| game.time.to_i > 3 }
              # Perform desired operations on each game
              # Example: game.title = game.title.capitalize
            render json: filtered_games
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

        



  

    def update
        game = current_user.games.find(params[:id])
        game.update!(game_params)
        render json: game
    end
    #update the user's game
    #always off the model here

    def destroy
        game = @current_user.find(params[:id])
        game.destroy
        head :no_content
    end
    #delete the user's game
    #always off the model here


    private

    #nancy has this so if I am reverting back to current_user then I need to use this method as well
    # def current_user
    #     User.find_by(id: session[:user_id])
    # end
#current user is in the session
#returns current user object 

    def game_params
        params.permit(:time, :bring_ball, :id, :skill_level, :contact_info, :user_id, :court_id)
    end

    #nancy's
    # def authorize
    #     user_id = session[:user_id]
    #     game = Game.find(params[:id])
    #     return render json: {error: "You are not authorized to edit this game"}, status: :unauthorized unless session.include? :user_id   
    # end

    #one my friend and I made I don't know if this makes any difference?
    # def authorize_user
    #     user_id = session[:user_id]
    #     game = Game.find(params[:id])
    #     return render json: {error: "You are not authorized to edit this game"}, status: :unauthorized unless game.user_id == user_id 
    # end

  

    #runs this method before any action happens
    #checks the condition if they are authorized, if there is an authorized user
    #if the sessions DOES not inlude user_id please do this
    #if not do nothing
    #if logged in they are authorized
end

#full crud in here