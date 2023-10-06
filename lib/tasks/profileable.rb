module Profileable
    extend ActiveSupport::Concern
  
    included do
      has_one :user_profile, as: :profileable, touch: true
    end
  end