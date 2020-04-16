import React, { Component } from 'react'
import Shelf from './Shelf'

class Shelves extends Component {
    render() {
        return (
                <div className="list-books-content">
                    <div>
                        <Shelf shelves={[{ name: 'Currently Reading' }]} />
                        <Shelf shelves={[{ name: 'Want to read' }]} />
                        <Shelf shelves={[{ name: 'Read' }]} />
                    </div>
                </div>
        )
    }
}

export default Shelves
