class GameSerializer < ActiveModel::Serializer
  attributes :id, :time, :bring_ball, :skill_level, :contact_info, :court_id, :user_id

  belongs_to :court
  belongs_to :user
end
