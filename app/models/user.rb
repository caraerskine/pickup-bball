class User < ApplicationRecord
    has_secure_password

    has_many :games
    has_many :courts, through: :games
end

#a user has_many games 
#(THROUGH courts)