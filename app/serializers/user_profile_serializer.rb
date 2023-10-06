class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :email, :password_digest, :entryable_type, :entryable_id
end
