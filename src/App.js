import React from 'react';
import './App.css';
import * as BooksAPI from './utils/BooksAPI'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage'
import MainPage from './components/MainPage'

class App extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState(() => ({
          books: books
        }))
      })
  }

  closeSearch = () => this.setState({ showSearchPage: false })

  addBook = () => this.setState({ showSearchPage: true })

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path='/' render={() => (
              <MainPage addBook={this.addBook} />
            )} />
            <Route exact path='/search' render={() => (
              <SearchPage books={this.state.books} />
            )} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
