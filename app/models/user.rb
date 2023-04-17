class User < ApplicationRecord
    has_secure_password

    has_many :games
end

#a user has_many games 
#(THROUGH courts)