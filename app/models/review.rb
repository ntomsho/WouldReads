class Review < ApplicationRecord

  validates :book_id, presence: true
  validates :user_id, presence: true
  validates :rating, presence: true

  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :book,
    foreign_key: :book_id,
    class_name: :Book
end