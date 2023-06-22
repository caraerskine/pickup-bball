class Court < ApplicationRecord
    has_many :games, dependent: :destroy
    has_many :users, through: :games 

    validates :park, presence: true
    validates :park, uniqueness: true
end

