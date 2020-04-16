import React, { Component } from 'react'

class ShelfChange extends Component {
    render() {

        const { book, changeBookShelf, currentReading, wantToRead, read, none } = this.props;

        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => changeBookShelf(event.target.value, book)} >
                    <option className="moveTo" value='move' disabled>Move to...</option>
                    <option className={currentReading} value="currentlyReading">Currently Reading</option>
                    <option className={wantToRead} value="wantToRead">Want to Read</option>
                    <option className={read} value="read">Read</option>
                    <option className={none} value="none" selected>None</option>
                </select>
            </div>
        )
    }
}

export default ShelfChange
