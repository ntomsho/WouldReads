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

export const createShelfBook = (shelf_book) => {
  return $.ajax({
    method: "POST",
    url: `api/books`,
    data: {shelf_book}
  });
};

export const deleteShelfBook = (shelfBookId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/books/${shelfBookId}`
  });
};