# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Shelf.delete_all

cage = User.create!(
  username: "Nicolas Cage",
  email: "wild@heart.com",
  password: "notthebees"
);

  Shelf.create!(
    title: "Read",
    user_id: cage.id,
    default_shelf: true
  )

  Shelf.create!(
    title: "Currently Reading",
    user_id: cage.id,
    default_shelf: true
  )

  Shelf.create!(
    title: "Want to Read",
    user_id: cage.id,
    default_shelf: true
  )