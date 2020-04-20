import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import Books from './Books'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchPage extends Component {

    state = {
        value: '',
        books: []
    }

    updateQuery = (event) => {
        this.setState({ value: event.target.value })

        BooksAPI.search(event.target.value)
            .then(books => {
                if (books) {
                    for (let index = 0; index < books.length; index++) {

                        this.props.books.map(book => {
                            if (books[index].id === book.id) {
                                books[index].shelf = book.shelf
                            }
                            return this.setState({
                                books: books[index]
                            })
                        })
                    }
                    this.setState({
                        books: books
                    })
                } else if (this.state.value === '') {
                    this.setState({
                        books: []
                    })
                } else {
                    this.setState({
                        books: []
                    })
                }
            })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                            value={this.state.value}
                            onChange={this.updateQuery} />
                    </div>
                </div>
                <div className="search-books-results">
                    <Books books={this.state.books} changeShelf={this.props.changeShelf} />
                </div>
            </div>
        )
    }
}

SearchPage.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default SearchPage
