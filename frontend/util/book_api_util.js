export const fetchBooks = (id) => {
  return $.ajax({
    method: "GET",
    url: "api/books",
    data: {id}
  });
};

export const fetchBook = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/books/${id}`
  });
};