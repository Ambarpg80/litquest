class ChildSerializer < ActiveModel::Serializer
  attributes :id, :parent_id, :name,:age, :image_url,:books, :reviews  #attributes passed to other models

  has_one :user_profile
  has_many :books, through: :reviews

  def age
    self.object.user_profile.age
  end 
  
end
