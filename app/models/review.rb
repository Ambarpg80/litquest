class Review < ApplicationRecord
  belongs_to :child
  belongs_to :book
end
