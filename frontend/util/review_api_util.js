export const fetchReviews = (book) => {
  return $.ajax({
    method: "GET",
    url: "api/reviews",
    data: {book}
  });
};

export const fetchReview = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/reviews/${id}`
  });
};

export const createReview = (review) => {
  return $.ajax({
    method: "POST",
    url: `api/reviews`,
    data: {review}
  });
};