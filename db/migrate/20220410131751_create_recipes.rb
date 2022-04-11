class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.integer :cook_time
      t.integer :prep_time
      t.integer :ratings
      t.string :category
      t.string :author
      t.text :image
      t.text :ingredients
      t.timestamps
    end
  end
end
