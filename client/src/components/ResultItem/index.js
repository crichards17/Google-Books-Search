import React, { Component } from 'react';

class ResultItem extends Component {
    
    handleClick = () => {
        this.props.saveBook(this.props);
    }
    
    render () {
        return (
            <div>
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <img src={this.props.image} style={{maxWidth: "100px"}} alt="book"/>
                        <h5 className="card-title" style={{margin: "10px 0"}}>{this.props.title}</h5>
                        <p className="card-text" >{this.props.description}</p>
                        <p style={{fontStyle: "italic"}}>Author(s): {this.props.authors}</p>
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{marginRight: "6px"}}>View Book</a>
                        <button onClick={this.handleClick} className="btn">Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultItem;