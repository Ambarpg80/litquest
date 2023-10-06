class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :email, :password_digest, :profileable_type, :profileable_id
end
