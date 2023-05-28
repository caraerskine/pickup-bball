class Court < ApplicationRecord
    has_many :games, dependent: :destroy
    has_many :users, through: :games 

    validates :park, presence: true
end

#added , dependent: :destroy on line 2 the other day - not sure