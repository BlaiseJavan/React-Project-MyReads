import React from 'react'
import Books from './Books'
import PropTypes from 'prop-types'

const Shelf = ({ shelves, changeShelf, books }) => {

    return (
        <div>
            {shelves.map((shelf => (
                <div className="bookshelf" key={shelf.name}>
                    <h2 className="bookshelf-title">{shelf.name}</h2>
                    <div className="bookshelf-books">
                        <div className="search-books-results">
                            <Books books={books} changeShelf={changeShelf} />
                        </div>
                    </div>
                </div>
            )))}
        </div>
    )
}

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired
}

export default Shelf
