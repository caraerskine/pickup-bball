class CourtSerializer < ActiveModel::Serializer
  attributes :id, :park, :neighborhood, :street, :notes
  has_many :games, serializer: CourtGameSerializer
end
