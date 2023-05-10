class Court < ApplicationRecord
    has_many :games
    has_many :users, through: :games 

    validates :park, presence: :true
end
