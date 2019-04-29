reviews = []
user.authored_reviews.each do |review|
  reviews.push(review) if review.user_id == current_user.id
end

all_shelf = user.shelves.select { |shelf| shelf.title == "All" }[0]

json.extract! user, :id, :username, :email
json.reviews reviews
json.all_shelf all_shelf.id