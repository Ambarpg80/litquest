class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :publisher
      t.string :genre
      t.string :thumbnail_url
      t.string :preview

      t.timestamps
    end
  end
end
