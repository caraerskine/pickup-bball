class User < ApplicationRecord
    has_secure_password

    validates :username, uniqueness: true 
    validates :password, :password_confirmation, :username, presence: true
 
    has_many :games, dependent: :destroy
    has_many :courts, through: :games

end

