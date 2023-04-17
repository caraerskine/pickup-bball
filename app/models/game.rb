class Game < ApplicationRecord
    belongs_to :user
end

#a game belongs_to a user 
#(AND belongs_to a court)