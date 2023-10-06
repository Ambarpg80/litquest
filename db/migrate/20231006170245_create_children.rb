class CreateChildren < ActiveRecord::Migration[7.0]
  def change
    create_table :children do |t|
      t.string :image_url
      t.string :rewards
      t.belongs_to :parent, null: false, foreign_key: true

      t.timestamps
    end
  end
end
