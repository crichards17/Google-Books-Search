import React, { Component } from 'react'
import ResultItem from '../ResultItem'

class ResultList extends Component {


    render() {
        console.log("Props", this.props.bookState)
        return (
            this.props.bookState.map((book) => (
            <ResultItem 
            key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            link={book.volumeInfo.previewLink}
            authors={book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150"}
            description={book.volumeInfo.description}
            saveBook={this.props.saveBook}
            />
        ))
        )
                           
    }
}

export default ResultList