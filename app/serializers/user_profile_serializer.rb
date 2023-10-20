class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :email, :age, :username, :password_digest, :profileable_type, :profileable_id

  
end
