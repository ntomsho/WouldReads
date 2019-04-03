books = []
shelf.books.each do |book|
  books.push(book.id)
end

json.extract! shelf, :id, :title, :default_shelf, :user_id
json.books books