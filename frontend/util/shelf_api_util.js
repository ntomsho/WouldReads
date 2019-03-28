export const fetchShelves = (data) => {
  return $.ajax({
    method: "GET",
    url: "api/shelves",
    data
  });
};

export const fetchShelf = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/shelves/${id}`
  });
};

export const createShelf = (shelf) => {
  return $.ajax({
    method: "POST",
    url: `api/shelves`,
    shelf
  });
};

export const updateShelf = (shelf) => {
  return $.ajax({
    method: "PATCH",
    url: `api/shelves/${shelf.id}`,
    shelf
  });
};

export const deleteShelf = (shelfId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/shelves/${shelfId}`
  });
};