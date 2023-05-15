class Game < ApplicationRecord
    validates :time, :skill_level, :contact_info, presence: true
    # validates :time, presence: :true

    belongs_to :user
    belongs_to :court
end

#validations are run when anything is saved
#with create, save and update all hit model and hit the validations
#because it is trying to get saved to the database

#do i need all these in the validations?