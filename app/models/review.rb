class Review < ApplicationRecord
  belongs_to :child
  belongs_to :book
  
  validates :summary, presence: true
  validates :rating, numericality: {less_than_or_equal_to: 5}
end
