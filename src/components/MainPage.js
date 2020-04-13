import React, { Component } from 'react'
import Shelves from './Shelves'
import AddButton from './AddBookButton'

class MainPage extends Component {
    render() {
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <Shelves />
                    <AddButton addBk={this.props.addBook} />
                </div>
            </div>
        )
    }
}

export default MainPage
