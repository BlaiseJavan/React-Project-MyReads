import React, { Component } from 'react'

class AddBookButton extends Component {
    render() {
        return (
            <div>
                <div className="open-search">
                    <button onClick={this.props.addBk}>Add a book</button>
                </div>
            </div>
        )
    }
}

export default AddBookButton
