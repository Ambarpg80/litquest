class ChildSerializer < ActiveModel::Serializer
  attributes :id, :parent_id, :name, :image_url, :rewards, :user_profile

  has_many :reviews
  has_many :books, through: :reviews
 
end
