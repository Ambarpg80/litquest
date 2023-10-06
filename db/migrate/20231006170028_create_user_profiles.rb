class CreateUserProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles do |t|
      t.string :name
      t.string :age
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :profileable_type
      t.string :profileable_id

      t.timestamps
    end
  end
end
