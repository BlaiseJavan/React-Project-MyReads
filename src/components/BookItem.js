import React, { Component } from 'react'
import ShelfChange from './ShelfChange'

class BookItem extends Component {

    render() {

        const { book, changeBookShelf, currentReading, wantToRead, read, none } = this.props;

        return (
            <div>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})` }}></div>
                        <ShelfChange changeBookShelf={changeBookShelf}
                            book={book} currentReading={currentReading}
                            wantToRead={wantToRead} read={read} none={none} />
                    </div>
                    <div className="book-title">{book.authors}</div>
                    <div className="book-authors">{book.subtitle}</div>
                </div>
            </div>
        )
    }
}

export default BookItem
