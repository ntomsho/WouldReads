class Shelf < ApplicationRecord

  validates :user_id, presence: true
  validates :title, presence: true
  validates_inclusion_of :default_shelf, in: [true, false]
  validates :title, uniqueness: {scope: :user_id, message: "Bookshelves must have a unique title"}

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :shelf_books,
    foreign_key: :shelf_id,
    class_name: :ShelfBook

  has_many :books,
    through: :shelf_books,
    source: :book

end