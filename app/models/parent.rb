class Parent < ApplicationRecord
  include Profileable

    has_one :user_profile, as: :profileable
    has_many :children
    
   validates :name, presence: true
   
    
end
