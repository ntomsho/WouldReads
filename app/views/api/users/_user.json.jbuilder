reviews = []
user.authored_reviews.each do |review|
  reviews.push(review) if review.user_id == current_user.id
end

json.extract! user, :id, :username, :email
json.reviews reviews