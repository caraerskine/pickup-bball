class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :courts_uniq
  has_many :games 
end
