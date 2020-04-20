import React from 'react'
import BookItem from './BookItem'
import PropTypes from 'prop-types'

const Books = ({ books, changeShelf }) => {

    const allBooks = books.length

    return (
        <div>
            <ol className="books-grid">
                {allBooks > 0 && books.map(book => {
                    return book.shelf === 'currentlyReading' ? (
                        <li key={book.id}>
                            <BookItem currentlyReading='selected' changeBookShelf={changeShelf} book={book} />
                        </li>) :
                        book.shelf === 'wantToRead' ? (
                            <li key={book.id}>
                                <BookItem wantToRead='selected' changeBookShelf={changeShelf} book={book} />
                            </li>) :
                            book.shelf === "read" ? (
                                <li key={book.id}>
                                    <BookItem read='selected' changeBookShelf={changeShelf} book={book} />
                                </li>) : (
                                    <li key={book.id}>
                                        <BookItem none='selected' changeBookShelf={changeShelf} book={book} />
                                    </li>)
                }
                )}
            </ol>
        </div>
    )
}

Books.propTypes = {
    changeShelf: PropTypes.func.isRequired
}

export default Books