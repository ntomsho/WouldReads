class ChangeShelfBookBookIDtoString < ActiveRecord::Migration[5.2]
  def change
    change_column :shelf_books, :book_id, :string
  end
end
