class CreateShelfBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :shelf_books do |t|
      t.integer :shelf_id, null: false
      t.integer :book_id, null: false
      t.timestamps
    end

    add_index :shelf_books, :shelf_id
    add_index :shelf_books, :book_id
    add_index :shelf_books, [:shelf_id, :book_id], unique: true
  end
end
