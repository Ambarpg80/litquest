class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :summary, :rating
  has_one :child
  has_one :book
end
