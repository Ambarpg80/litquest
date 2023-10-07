class ChildSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :rewards, :user_profile, :reviews, :books

has_one :user_profile
belongs_to :parent
has_many :reviews
has_many :books, through: :reviews
end
