class ParentSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :user_profile #controls what we see in childrens index route

  has_one :user_profile
  has_many :children 

  

  
end
