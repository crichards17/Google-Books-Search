import React, { Component } from 'react';
import SavedItem from '../SavedItem';

class SavedList extends Component {

    render() {
        return (
            this.props.bookState.map((book) => (
                <SavedItem 
                    key={book._id}
                    id={book._id}
                    title={book.title}
                    link={book.link}
                    authors={book.authors && book.authors.length > 1 ? book.authors.join(", ") : book.authors}
                    image={book.image ? book.image : "https://via.placeholder.com/150"}
                    description={book.description}
                    deleteBook={this.props.deleteBook}
                />
            ))
        );
    }
}

export default SavedList