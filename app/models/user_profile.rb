class UserProfile < ApplicationRecord
    delegated_type :profileable, types: %w[Parent Child], dependent: :destroy

end
