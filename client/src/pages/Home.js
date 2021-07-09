import React, { Component } from "react";
import { Container, Button, Jumbotron } from "react-bootstrap";
import API from "../utils/API";
import ResultList from "../components/ResultList";

class Home extends Component {

    state = {
        books: [],
        search: ""
    };


    searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                this.setState({
                books: res.data.items,
                search: ""
            })})
            .catch(err => console.log(err));
            
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };

    saveBook = book => {
        console.log(book);
        API.saveBook({
            id: book.id,
            title: book.title,
            authors: book.authors,
            description: book.description,
            image: book.image,
            link: book.link
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Jumbotron fluid style={{paddingLeft: "10px"}}>
                        <h1>Book Search</h1>
                        <form>
                            <div className="form-group">
                                <label for="search">Search Title</label>
                                <input 
                                    value={this.state.search}
                                    onChange={this.handleInputChange}
                                    name="search"
                                    id="search"
                                    className="form-control"
                                    placeholder="Book Title Here"
                                />
                            </div>
                            <Button type="submit" onClick={this.handleFormSubmit}>Search</Button>
                        </form>
                    </Jumbotron>
                
                {this.state.books.length ? (
                    <ResultList 
                    bookState={this.state.books}
                    saveBook={this.saveBook}>
                    </ResultList>
                ) : (
                    <div>
                        <hr/>
                    <p style={{fontStyle: "italic"}}>No results to display</p>
                    </div>
                )}
                
                </Container>
            </div>
        )
    }
}

export default Home