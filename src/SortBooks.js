export const sortAllBooks = (list) => {
  // Sort and return the given list of books
  const booksList = list.sort((x, y) => {
    const {bookX, bookY} = {
      bookX: x.title.toUpperCase(),
      bookY: y.title.toUpperCase()
    };

    if (bookX < bookY) {
      return -1;
    } else if (bookX > bookY) {
      return 1;
    } else {
      return 0;
    }
  });

  return booksList;
};

export const mergeShelfAndSearch = (shelf, search) => {
  // Check if the book already exists in shelf data
  // for each book in the search results
  const dir = {};

  for (const book of shelf) {
    dir[book.id] = book.shelf;
  }

  for (const book of search) {
    book.shelf = dir[book.id] || 'none';
  }

  return search;
};
