import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, {useContext} from "react";
import "../App.css";
import UserContext from "../context/UserContext";
import FavButton from "./FavButton";
import FavDisplay from "./FavDisplay";



const MovieList = ( {movies, search, favs, setFavorites} ) => {
    
   const user = useContext(UserContext);
  
    return (
        <>
            {user === null ? '' : <FavDisplay favList={favs} setFavorites={setFavorites}/>}
            <h1>Search Results</h1>
           
            {movies.map(movie => <div className= "col-sm-3">
                <div>
                <Link to={`/movie/${movie.imdbID}`}> <img className="mov-img"src={movie.Poster} alt={movie.Title}/>
                
                </Link>
                {user === null ? '' : <FavButton movie={movie} search={search} favForClick={favs} setFavorites={setFavorites}/>}
                </div>
                        
            </div>)}
        </>
    )
    
}

export default MovieList;