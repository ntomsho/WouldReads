export const fetchBooks = (shelf) => {
  return $.ajax({
    method: "GET",
    url: "api/books",
    data: shelf
  });
};

export const fetchBook = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/books/${id}`
  });
};