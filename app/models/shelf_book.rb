class ShelfBook < ApplicationRecord

    validates :shelf_id, presence: true, uniqueness: { scope: :book_id, message: "Can't have same book multiple times in same shelf" }
    validates :book_id, presence: true

    belongs_to :shelf,
        foreign_key: :shelf_id,
        class_name: :Shelf

    # belongs_to :book,
    #     foreign_key: :book_id,
    #     class_name: :Book

end