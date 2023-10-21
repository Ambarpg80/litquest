module Profileable
    extend ActiveSupport::Concern
  
    included do
      has_one :user_profile, as: :profileable, touch: true, dependent: :destroy
      accepts_nested_attributes_for :user_profile
    end
  end