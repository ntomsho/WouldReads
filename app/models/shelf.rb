class Shelf < ApplicationRecord

  validates :user_id, presence: true
  validates :title, presence: true
  validates :default_shelf, presence: true
  validates :title, uniqueness: {scope: :user_id, message: "Bookshelves must have a unique title"}

  belongs_to :user
    foreign_key: :user_id,
    class_name: :User

end