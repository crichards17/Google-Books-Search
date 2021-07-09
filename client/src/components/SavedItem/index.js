import React, { Component } from 'react';

class SavedItem extends Component {

    handleClick = () => {
        this.props.deleteBook(this.props);
    }

    render () {
        return (
            <div>
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <img src={this.props.image} style={{maxWidth: "100px"}} alt="jumbotron"/>
                        <h5 className="card-title" style={{margin: "10px 0"}}>{this.props.title}</h5>
                        <p className="card-text" >{this.props.description}</p>
                        <p style={{fontStyle: "italic"}}>Author(s): {this.props.authors}</p>
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn" style={{marginRight: "6px", backgroundColor: "rgb(33, 150, 243)", color: "white"}}>View Book</a>
                        <button onClick={this.handleClick} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SavedItem;