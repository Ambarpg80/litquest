class Child < ApplicationRecord
  include Profileable
  
  has_one :user_profile, as: :profileable
  
  belongs_to :parent
  has_many :reviews, dependent: :destroy
  has_many :books, through: :reviews
end
