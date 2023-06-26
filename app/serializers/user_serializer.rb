class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :courts_uniq
  has_many :games
  has_many :courts, through: :games 

  def courts_uniq
    # byebug
    object.courts.uniq
  end

end

#a custom method defined within a class. 
#Line 8 calls the courts association on the object and applies the uniq method to retireve a
#unique list of courts
# The courts association repsresent court objects assocaited with the 'object.'
#