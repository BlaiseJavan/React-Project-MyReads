import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import Books from './Books'
import { Link } from 'react-router-dom'

class SearchPage extends Component {

    state = {
        value: '',
        books: []
    }

    changeBookShelf = (shelf, book) => {
        const updatedBook = this.state.books.map(bk => {
            if (book.id === bk.id) {
                book.shelf = shelf
                return book;
            } else {
                return bk;
            }
        })
        this.setState(() => ({
            books: updatedBook
        }))
    }

    updateQuery = (event) => {
        this.setState({ value: event.target.value })

        BooksAPI.search(event.target.value, 20)
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
                    <Books books={this.state.books} changeShelf={this.changeBookShelf} />
                </div>
            </div>
        )
    }
}

export default SearchPage
