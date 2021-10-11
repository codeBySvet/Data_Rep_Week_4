import React, { Component } from "react";
import MovieItem from "./movieitem";

 class Movies extends Component{

    render() {
            //Calling .map function to take the collection object and split the collection into seperate sections .  
            return this.props.movies.map((movie)=>{
               //create a MovieItem per movie. Also passing data to movie item. Key is require to differenciate the different items
               return <MovieItem movie={movie} key={movie.imdbID}></MovieItem>

            })
        
    }
}
//Marking for export
export default Movies;
