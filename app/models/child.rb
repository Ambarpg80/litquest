class Child < ApplicationRecord
  include Profileable
  
  has_one :user_profile, as: :profileable, dependent: :destroy
  
  belongs_to :parent, optional: true
  has_many :reviews, dependent: :destroy
  has_many :books, through: :reviews


  validates :name, presence: true

 

end
