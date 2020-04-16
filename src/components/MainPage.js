import React, { Component } from 'react'
import Shelves from './Shelves'
import { Link } from 'react-router-dom'

class MainPage extends Component {
    render() {
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <Shelves />
                    {/* <div className="open-search"> */}
                        <Link className="open-search" to='/search' >Add a book</Link>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default MainPage
