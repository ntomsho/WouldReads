@books.each do |shelf|
  json.set! book.id do
    json.partial! 'book', book: book
  end
end