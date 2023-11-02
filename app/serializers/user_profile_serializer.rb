class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :email, :age, :username, :profileable_type, :profileable_id

  
end
