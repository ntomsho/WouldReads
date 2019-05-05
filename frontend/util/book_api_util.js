export const fetchBooks = (id) => {
  return $.ajax({
    method: "GET",
    url: "api/books",
    data: {id}
  });
};

// export const searchBooks = (filter) => {
//   return $.ajax({
//     method: "GET",
//     url: "api/search",
//     data: {filter}
//   });
// };

export const searchBooks = (filter) => {
  return $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${filter}&country=US`
  });
};

// export const fetchBook = (id) => {
//   return $.ajax({
//     method: "GET",
//     url: `api/books/${id}`
//   });
// };

export const fetchBook = (id) => {
  return $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes/${id}?q=&country=US`
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