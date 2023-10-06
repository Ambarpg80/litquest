class ChildSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :rewards
  has_one :parent
end
