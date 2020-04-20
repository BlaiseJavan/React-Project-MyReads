import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelves from './Shelves'
import PropTypes from 'prop-types'

class MainPage extends Component {

    state = {
        books: []
    }

    render() {

        const { books, changeShelf } = this.props

        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <Shelves books={books} changeShelf={changeShelf} />
                    <Link className="open-search" to='/search' >Add a book</Link>
                </div>
            </div>
        )
    }
}

MainPage.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default MainPage
