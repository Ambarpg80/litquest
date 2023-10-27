class Review < ApplicationRecord
  belongs_to :child
  belongs_to :book
  
  # validates :summary, presence: true
end
