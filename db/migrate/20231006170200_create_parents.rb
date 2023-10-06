class CreateParents < ActiveRecord::Migration[7.0]
  def change
    create_table :parents do |t|
      t.string :email
      t.string :image_url

      t.timestamps
    end
  end
end
