import React, { Component } from 'react'
import { Container, Jumbotron } from "react-bootstrap";
import API from '../utils/API';
import SavedList from '../components/SavedList';

class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.getBooks()
    }

    deleteBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            this.getBooks();
        })
        .catch(err => {
            console.log(err);
        })
    }

    getBooks = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }


    render() {
        return (
            <div>
                <Container fluid>
                <Jumbotron />
                {this.state.savedBooks.length ? (
                    <SavedList 
                    bookState={this.state.savedBooks}
                    deleteBook={this.deleteBook}
                    >
                    </SavedList>
                ) : (
                    <h5>No results to display</h5>
                )}
                </Container>
            </div>
        )
    }
}

export default Saved