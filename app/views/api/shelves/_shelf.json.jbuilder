shelvings = []
shelf.shelf_books.each do |shelving|
  shelvings.push(shelving)
end

shelvedBooks = []
shelf.shelf_books.each do |shelving|
  shelvedBooks.push(shelving.book_id)
end

json.extract! shelf, :id, :title, :default_shelf, :user_id
json.shelvings shelvings
json.shelvedBooks shelvedBooks