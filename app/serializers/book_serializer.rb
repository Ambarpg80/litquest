class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :publisher, :genre, :thumbnail_url, :preview
  
  has_many :reviews
  has_many :users, through: :reviews
end
