shelves = []
book.shelves.each do |shelf|
  shelves.push(shelf.id) if shelf.user_id == current_user.id
end

json.extract! book, :id, :title, :isbn, :author, :genre, :synopsis
json.shelves shelves