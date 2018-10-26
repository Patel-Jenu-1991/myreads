import React from 'react';
import * as BooksAPI from './BooksAPI';
import * as SortBooks from './SortBooks';
import './App.css';
import BookCase from './BookCase.js';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    if (this.state.newBook) {
      this.refreshAllBooks();
    }
  }

  refreshAllBooks = () => {
    // obtain books currently on shelf, update state
    // with returned sorted list
    BooksAPI.getAll().then((list) => {
      this.setState({
        books: SortBooks.sortAllBooks(list),
        newBook: false
      });
    });
  };

  changeShelf = (book, shelf) => {
    // Make a call to the BooksAPI service to update the shelf
    // for a selected book to the new shelf
    BooksAPI.update(book, shelf).then(response => {
      // Update book state. Start with a fresh list of books
      let booksList = this.state.books.slice(0);
      // Look for the book in the list, might not be there yet...
      const books = booksList.filter(listBook => listBook.id === book.id);
      if (books.length) {
        // Update the book that's already on the shelf
        books[0].shelf = shelf;
      } else {
        // Add the book to shelf and sort list of books again
        booksList.push(book);
        booksList = SortBooks.sortAllBooks(booksList);
      }
      // Update state with the sorted list of books
      this.setState({books: booksList});
    });
  };

  render() {
    return (
      <BookCase
        books={this.state.books}
        onRefreshAllBooks={this.refreshAllBooks}
        onChangeShelf={this.changeShelf}/>
    );
  }
}

export default BooksApp;
