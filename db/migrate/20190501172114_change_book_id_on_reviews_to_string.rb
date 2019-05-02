class ChangeBookIdOnReviewsToString < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :book_id, :string
  end
end
