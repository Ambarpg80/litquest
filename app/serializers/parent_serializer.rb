class ParentSerializer < ActiveModel::Serializer
  attributes :id, :email, :image_url, :user_profile

  has_one :user_profile
  has_many :children


end
