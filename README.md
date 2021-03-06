# README

## [WouldReads](https://wouldreads.herokuapp.com)

WouldReads is a social cataloguing web app, a clone of GoodReads for those honest readers who always have a stack of books they *would* read, but....

<figure>
  <img src="https://i.imgur.com/zdp6w3P.png">
  <figcaption>WouldReads splash page.</figcaption>
</figure>

Users can manage their catalogue of books they likely will never read through a set of "bookshelves" that organize the user's collection. Three default shelves ("Skimmed", "Pretending to Read", and "Would Read") are automatically generated, but users can also create custom shelves to plan their dream reading list of books they will never open.

<figure>
   <img src="https://i.imgur.com/m9tNEwZ.png">
    <figcaption>The user shelves index</figcaption>
</figure>

## Technologies Used

Wouldreads is built with a Ruby on Rails backend utilizing React-Redux for a smooth, single-page frontend. Postgres is used for databasing and AWS hosts book cover images for faster load-times.

## Feature: Bookshelves

User shelvings utilize backend logic to ensure that any given book can only be placed into one of a user's default shelves, which are analogous to Goodreads' "read status". This allows users to conveniently sort books depending on whether they have read a book, are currently reading it, or if it is in their to-read list. Every book placed into one of these shelves is also placed into the user's "All" shelf and the server prevents duplicate entries in all shelves.

<figure>
  <img src="https://i.imgur.com/SAXOAgd.png">
  <figcaption>The shelf selection and book rating interface.</figcaption>
</figure>

<figure>
  <img src="https://i.imgur.com/A8hEjmi.png" />
  <figcaption>Backend code that processes adding books to shelves.</figcaption>
</figure>

## Feature: Star-Ratings

Users can rate books with one to five stars through a React-based CSS interface that uses the ubiquitous star-rating UI seen across the web to provide a familiar and intuitive user experience.

<figure>
  <img src="https://i.imgur.com/CVQhNaw.png" />
  <figcaption>Frontend code that creates the star-rating React component.</figcaption>
</figure>

Users can also post text reviews that are visible to other users viewing that book's page.

<figure>
  <img src="https://i.imgur.com/p0yBUTW.png">
  <figcaption>The review interface</figcaption>
</figure>

## Coming Features

Features to be implemented include:

* Social features - User profies, mark other users as friends, view other user's shelves and profiles, recommend books to others
* Algorithmically generated recommendations based on user's ratings
* A splash page events feed with community updates
* General bug-fixes for existing features

## 
