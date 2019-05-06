# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

User.destroy_all
Shelf.destroy_all
Book.destroy_all
ShelfBook.destroy_all
Review.destroy_all

  cage = User.create!(
    username: "Nicolas Cage",
    email: "wild@heart.com",
    password: "notthebees"
  );

  cageall = Shelf.create!(
    title: "All",
    user_id: cage.id,
    default_shelf: true
  )

  cageskim = Shelf.create!(
    title: "Skimmed",
    user_id: cage.id,
    default_shelf: true
  )

  cagepretend = Shelf.create!(
    title: "Pretending to Read",
    user_id: cage.id,
    default_shelf: true
  )

  cagewould = Shelf.create!(
    title: "Would Read",
    user_id: cage.id,
    default_shelf: true
  )

  cagevoodoo = Shelf.create!(
    title: "books about voodoo",
    user_id: cage.id,
    default_shelf: false
  )

  cagebuns = Shelf.create!(
    title: "fluffy bunnies",
    user_id: cage.id,
    default_shelf: false
  )

sb1a = ShelfBook.create(
  shelf_id: cageall.id,
  book_id: "MSKEDwAAQBAJ"
)

sb1b = ShelfBook.create(
  shelf_id: cageskim.id,
  book_id: "MSKEDwAAQBAJ"
)

sb1a = ShelfBook.create(
  shelf_id: cageall.id,
  book_id: twentyone_lessons.id
)

r1 = Review.create(
  book_id: "MSKEDwAAQBAJ",
  user_id: cage.id,
  rating: 5,
  body: "Whoa! Crazy robots and radical mind-control, man!"
)

sb2a = ShelfBook.create(
  shelf_id: cageall.id,
  book_id: "uwRHDwAAQBAJ"
)

sb2b = ShelfBook.create(
  shelf_id: cagewould.id,
  book_id: "uwRHDwAAQBAJ"
)

sb2c = ShelfBook.create(
  shelf_id: cagevoodoo.id,
  book_id: "uwRHDwAAQBAJ"
)

r2 = Review.create(
  book_id: "uwRHDwAAQBAJ",
  user_id: cage.id,
  rating: 4,
  body: "I haven't read this yet, but it's got some crazy black-magic juju, man!"
)

sb3a = ShelfBook.create(
  shelf_id: cageall.id,
  book_id: "mvlRDwAAQBAJ"
)

sb3b = ShelfBook.create(
  shelf_id: cagewould.id,
  book_id: "mvlRDwAAQBAJ"
)

sb3c = ShelfBook.create(
  shelf_id: cagebuns.id,
  book_id: "mvlRDwAAQBAJ"
)

sb4a = ShelfBook.create(
  shelf_id: cageall.id,
  book_id: "zlyHHvgCZpAC"
)

sb4b = ShelfBook.create(
  shelf_id: cagepretend.id,
  book_id: "zlyHHvgCZpAC"
)

sb4c = ShelfBook.create(
  shelf_id: cagebuns.id,
  book_id: "zlyHHvgCZpAC"
)