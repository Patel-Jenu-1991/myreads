import React from 'react';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import * as SortBooks from './SortBooks';
import './App.css';
import BookCase from './BookCase.js';
import Search from './Search';

class BooksApp extends React.Component {
  state = {};

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
      <div className='app'>
        <Route
          exact
          path='/'
          render={(() => (<BookCase
          books={this.state.books}
          onChangeShelf={this.changeShelf}
          onRefreshAllBooks={this.refreshAllBooks}/>))}/>

        <Route
          exact
          path='/search'
          render={(() => (<Search
            selectedBooks={this.state.books}
            onChangeShelf={this.changeShelf}/>))}/>
      </div>
    );
  }
}

export default BooksApp;
