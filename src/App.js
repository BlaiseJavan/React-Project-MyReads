import React from 'react';
import './App.css';
import SearchPage from './components/SearchPage'
import MainPage from './components/MainPage'

class App extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  closeSearch = () => this.setState({ showSearchPage: false })

  addBook = () => this.setState({ showSearchPage: true })

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage closeSearch={this.closeSearch} />
        ) : (
            <MainPage addBook={this.addBook} />
          )}
      </div>
    )
  }
}

export default App;
