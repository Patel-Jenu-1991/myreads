import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import * as SortBooks from './SortBooks';
import Book from './Book';

class Search extends Component {
  state = {
    query: "",
    books: []
  };

  changeQuery = (value) => {
    // Update query then pause for about a quarter second
    // before executing the search
    clearTimeout(this.queryTimer);
    this.setState({query: value});
    this.queryTimer = setTimeout(this.updateSearch, 250);
  };

  updateSearch = () => {
    // Never run a search on an empty string
    if (this.state.query === "") {
      this.setState({error: false, books: []});
      return;
    }

    // Execute search on query string and process response
    BooksAPI.search(this.state.query).then(response => {
      let booksList = [], queryError = false;
      // Check for errors, check for any results, do nothing in case
      // no matching results have been found
      if (
        response === undefined || (response.error && response.error !== 'empty query')
      ) {
        queryError = true;
      } else if (response.length) {
        // Compare list of books the user already has on shelves with
        // the search results and entreat shelf data accordingly
        booksList = SortBooks.mergeShelfAndSearch(this.props.selectedBooks, response);
        booksList = SortBooks.sortAllBooks(booksList);
      }

      // Set state based on results
      this.setState({error: queryError, books: booksList});
    });
  };

  componentWillReceiveProps = (props) => {
    // Re-merge and sort shelf, search lists and set state
    this.props = props;
    let booksList = SortBooks.mergeShelfAndSearch(this.props.selectedBooks, this.state.books);
    booksList = SortBooks.sortAllBooks(booksList);
    this.setState({books: booksList});
  };

  render() {
    return (
      <div>
        <div className='search-books'>
          <div className='search-books-bar'>
            <Link className='close-search' to='/'>Close</Link>
            <div className='search-books-input-wrapper'>
              <input
                type='text'
                placeholder='Search by title or author'
                onChange={(event) => this.changeQuery(event.target.value)}
                value={this.state.query.value}/>
            </div>
          </div>
          <div className='search-books-results'>
            {this.state.error && (
              <div className='search-error'>
                There was a problem with your search
              </div>
            )}
            {!this.state.error && (
              <span className='search-count'>
                {this.state.books.length}&nbsp; books match your search
              </span>
            )}

            <ol className='books-grid'>
              {this.state.books && this.state.books.map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    onChangeShelf={this.props.onChangeShelf}/>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
