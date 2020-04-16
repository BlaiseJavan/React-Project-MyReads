import React, { Component } from 'react'
import BookItem from './BookItem'

class Books extends Component {
    render() {
        const { books = [], changeShelf } = this.props
        const listOfBooks = books.length

        return (
            <div>
                <ol className="books-grid">
                    {listOfBooks > 0 && books.map(book => {
                        return book.shelf === 'currentlyReading' ? (
                            <li key={book.id}>
                                <BookItem currentReading='selected' changeBookShelf={changeShelf} book={book} />
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
}

export default Books