import React from 'react'
import Shelf from './Shelf'
import PropTypes from 'prop-types'

const Shelves = ({ books, changeShelf }) => {

    const currentlyReading = books.length > 0 && books.filter(book => book.shelf === "currentlyReading");
    const WantToRead = books.length > 0 && books.filter(book => book.shelf === "wantToRead");
    const Read = books.length > 0 && books.filter(book => book.shelf === "read");

    return (
        <div className="list-books-content">
            <div>
                <Shelf shelves={[{ name: 'Currently Reading' }]} books={currentlyReading} changeShelf={changeShelf} />
                <Shelf shelves={[{ name: 'Want to read' }]} books={WantToRead} changeShelf={changeShelf} />
                <Shelf shelves={[{ name: 'Read' }]} books={Read} changeShelf={changeShelf} />
            </div>
        </div>
    )
}

Shelf.propTypes = {
    changeShelf: PropTypes.func.isRequired
}

export default Shelves
