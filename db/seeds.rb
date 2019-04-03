# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Shelf.delete_all
Book.delete_all
ShelfBook.delete_all

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

  cageread = Shelf.create!(
    title: "Read",
    user_id: cage.id,
    default_shelf: true
  )

  Shelf.create!(
    title: "Currently Reading",
    user_id: cage.id,
    default_shelf: true
  )

  cagewtr = Shelf.create!(
    title: "Want to Read",
    user_id: cage.id,
    default_shelf: true
  )

    voodoo = Book.create!(
      title: "Beginner's Guide to Voodoo",
      isbn: 123,
      author: "Billywitchdoctor.com",
      genre: "Nonfiction",
      synopsis: "A beginner's guide to voodoo"
    )

    ghost = Book.create!(
      title: "Ghost Rider vol. 1",
      isbn: 456,
      author: "Stan Lee",
      genre: "Comicbook",
      synopsis: "The one with the flaming skull head guy"
    )

      ShelfBook.create!(
        book_id: voodoo.id,
        shelf_id: cageall.id
      )

      ShelfBook.create!(
        book_id: voodoo.id,
        shelf_id: cagewtr.id
      )

      ShelfBook.create!(
        book_id: ghost.id,
        shelf_id: cageall.id
      )

      ShelfBook.create!(
        book_id: ghost.id,
        shelf_id: cageread.id
      )
