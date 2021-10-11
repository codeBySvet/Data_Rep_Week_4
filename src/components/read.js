import React, { Component } from "react"; //importing elements from React 
import Movies from "./movies"; //importing movies component

// Class for the home page of the navbar containing the content of the component
export class Read extends Component {


    //Creating object called State to store data being used in the class/component
    state ={
        //The object data itself
        movies:[
            {
                "Title": "Avengers: Infinity War",
                "Year": "2018",
                "imdbID": "tt4154756",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
                "Title": "Captain America: Civil War",
                "Year": "2016",
                "imdbID": "tt3498820",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
                "Title": "Charlie Wilson's War",
                "Year": "2007",
                "imdbID": "tt0472062",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
            }
        ]
    
    };

        



    render() {
        return (
            <div>
            <h1>Hello from read.</h1>
            //Embedding the Movies component into this Read component. Also passing data from Read to Movies
            <Movies movies={this.state.movies}></Movies>
            
            </div>
        );
    }

}

//marking for export
export default Read;
