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
