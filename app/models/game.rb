class Game < ApplicationRecord
    belongs_to :user
    belongs_to :court
end

#a game belongs_to a user 
#AND belongs_to a court