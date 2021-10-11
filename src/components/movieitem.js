import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

{/* This class will auto generate components, per movie, based off the data that is referenced */}
class MovieItem extends Component {

    render() {
        return (
            <div>
                {/* Adding card styling from React Bootstrap */}
                <Card>
                     {/* Referencing the title property */}
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/* Referencing the image property */}
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">   
                            </footer>
                            {/* Referencing the year property */}
                            {this.props.movie.Year}
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MovieItem;
