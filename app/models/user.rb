class User < ApplicationRecord
    has_secure_password

    validates :username, :password, :password_confirmation, presence: true
    
    has_many :games, dependent: :destroy
    has_many :courts, through: :games

    def courts_uniq
        self.courts.uniq
    end
end

#keep the uniq ??