class UserProfile < ApplicationRecord
    delegated_type :profileable, types: %w[Parent Child], dependent: :destroy
    
    has_secure_password

    validates :email, :username, uniqueness: true
    validates :age, :password_confirmation, presence: true
    validates :password, confirmation: true, presence: true
    
    
    

    
end
