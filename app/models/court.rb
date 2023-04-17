class Court < ApplicationRecord

    has_many :users
    has_many :games

    has_many :users, through: :games 

end
