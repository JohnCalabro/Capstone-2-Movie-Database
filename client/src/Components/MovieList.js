import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import SearchMovie from "./SearchMovie";
import Details from "./Details";


const MovieList = ( {movies} ) => {

   console.log(movies)

    return (
        <>
            <h1>List of Films</h1>
            <Routes>
                 <Route path='/movie' element={ <Details />}></Route>
            </Routes>
            
            {/* <SearchMovie search={search} setSearch={setSearch}/> */}
            {movies.map(movie => <div>
                {/* <Link to="/movie"> <img src={movie.Poster}/></Link> */}
                {/* <img src={movie.Poster}/> */}
                
                {/* <BrowserRouter> */}
                <Link to={`/movie/${movie.imdbID}`}> <img src={movie.Poster}/></Link>
                    {/* <Routes> */}
                        {/* <Route exact path='/movie' element={ <Details />}></Route> */}
                    {/* </Routes> */}
                {/* </BrowserRouter> */}
               
            
            </div>)}
        </>
    )
    
}

export default MovieList;