class Book < ApplicationRecord

    validates :title, presence: true
    validates :isbn, presence: true
    validates :author, presence: true
    validates :genre, presence: true
    validates :synopsis, presence: true

    has_many :shelf_books,
        foreign_key: :book_id,
        class_name: :ShelfBook

    has_many :shelves,
        through: :shelf_books,
        source: :shelf

end