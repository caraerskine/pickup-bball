class User < ApplicationRecord
    has_secure_password
    validates :username, :password, :password_confirmation, presence: true
    
    has_many :games
    has_many :courts, through: :games
end

