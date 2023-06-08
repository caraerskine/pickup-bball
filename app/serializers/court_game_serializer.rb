class CourtGameSerializer < ActiveModel::Serializer
  attributes :id, :time, :bring_ball, :skill_level, :contact_info, :user_id, :user
end

#this is a custom serializer that is passed explicitly 
