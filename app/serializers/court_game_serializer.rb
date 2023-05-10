class CourtGameSerializer < ActiveModel::Serializer
  attributes :id, :time, :bring_ball, :skill_level, :contact_info, :user_id, :user
end
