import React from 'react';
import './App.css';
import * as BooksAPI from './utils/BooksAPI'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage'
import MainPage from './components/MainPage'

class App extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState(() => ({
          books: books
        }))
      })
  }

  changeBookShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then(books => {
      if (shelf === 'none') {
        this.setState(prevState => ({
          books: prevState.books.filter(b => b.id !== book.id)
        }));
      } else {
        book.shelf = shelf;
        this.setState(prevState => ({
          books: prevState.books.filter(b => b.id !== book.id).concat(book)
        }));
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path='/search' render={() => (
              <SearchPage books={this.state.books} changeShelf={this.changeBookShelf} />
            )} />
            <Route exact path='/' render={() => (
              <MainPage books={this.state.books} changeShelf={this.changeBookShelf} />
            )} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
