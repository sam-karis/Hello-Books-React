import React, { Component } from 'react';

class Book extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>
                        {this.props.book.Title}
                    </td>
                    <td>
                        {this.props.book.author}
                    </td>
                    <td>
                        {this.props.book.edition}
                    </td>
                    <td>
                        {this.props.book.description}
                    </td>
                </tr>
            </tbody>
        );
    }
}

export default Book;
