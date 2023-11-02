class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :child_id, :book_id, :summary, :rating

belongs_to :child
belongs_to :book
end
