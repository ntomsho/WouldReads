shelves = []
book.shelves.each do |shelf|
  shelves.push(shelf.id) if shelf.user_id == current_user.id
end

shelvings = []
book.shelf_books.each do |shelf_book|
  shelvings.push(shelf_book) if shelf_book.shelf.user_id == current_user.id
end

total_ratings = 0
book.reviews.each do |review|
  total_ratings += review.rating
end
avg_rating = total_ratings / (book.reviews.count * 1.00)

# shelf_dates = []
# book.shelf_books.each do |shelf_book|
#   shelf_dates.push(shelf_book.updated_at)
# end

json.extract! book, :id, :title, :isbn, :author, :genre, :synopsis
json.shelves shelves
json.coverUrl url_for(book.cover)
json.shelf_books shelvings
json.avg_rating avg_rating