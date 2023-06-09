class Game < ApplicationRecord
    validates :time, :skill_level, :contact_info, presence: true
    validates :time, presence: true

    belongs_to :user
    belongs_to :court
end


