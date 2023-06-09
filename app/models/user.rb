class User < ApplicationRecord
    has_secure_password

    validates :username, uniqueness: true 
    validates :password, :password_confirmation, :username, presence: true
 
    
    has_many :games, dependent: :destroy
    has_many :courts, through: :games

end

#keep the uniq ??

#uniqueness: true

#has_secure_passwrod securely stores passwords using hashing and provides methods for authentication
#it assumes you have a password_digest column in your users database table (which I do)

#valiadtes :username uniqueness true is a validation rule for username attribute so it must be unique

#same with line 5, it ensures these attributes are not blank and must have a value

#line 8 establishes a one-to-many assoc between the User model and the Game model. 
# a user can have many games and dependet:destory means that if a user is destroyed all assoc games for that user should be destroyed as well

#line 9 establishes a many-to-many association between the user model and the court model thruogh the game model 
#it allows a user to have access to courts thru the games they are asociated with