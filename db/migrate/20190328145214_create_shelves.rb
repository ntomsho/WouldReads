class CreateShelves < ActiveRecord::Migration[5.2]
  def change
    create_table :shelves do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.boolean :default_shelf, null: false
      t.timestamps
    end

    add_index :shelves, :user_id
    add_index :shelves, [:user_id, :title], unique: true
  end
end
