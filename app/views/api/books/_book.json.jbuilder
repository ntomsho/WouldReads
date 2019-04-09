shelves = []
book.shelves.each do |shelf|
  shelves.push(shelf.id) if shelf.user_id == current_user.id
end

shelvings = []
book.shelf_books.each do |shelf_book|
  shelvings.push(shelf_book) if shelf_book.shelf.user_id == current_user.id
end

total_ratings = 0
total_reviews = 0
book.reviews.each do |review|
  total_ratings += review.rating
  if review.body
    total_reviews += 1
  end
end
avg_rating = (total_ratings.to_f / book.reviews.count).floor(2)

# shelf_dates = []
# book.shelf_books.each do |shelf_book|
#   shelf_dates.push(shelf_book.updated_at)
# end

json.extract! book, :id, :title, :isbn, :author, :genre, :synopsis
json.shelves shelves
json.coverUrl url_for(book.cover)
json.shelf_books shelvings
json.avg_rating avg_rating
json.total_ratings total_ratings
json.total_reviews total_reviews