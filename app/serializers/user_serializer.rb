class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :courts_uniq
  has_many :games
  has_many :courts, through: :games 

  def courts_uniq
    object.courts.uniq
  end

end
