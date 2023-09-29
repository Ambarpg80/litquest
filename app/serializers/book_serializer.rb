class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :publisher, :genre, :thumbnail_url
  
end
