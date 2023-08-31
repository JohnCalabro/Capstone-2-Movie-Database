import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import SearchMovie from "./SearchMovie";
import Testing from "./Components/Testing";
import FilmDetails from "./Components/FilmDetails";
import MovieList from './Components/MovieList';

import axios from "axios";

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState('');

 

  useEffect(() => {
    const getFilm = async (search) => {
      const url = `https://www.omdbapi.com/?s=${search}&apikey=dcb23672`
      const response = await axios.get(url);
      console.log(response.data.Search)
      
     
      if(response.data.Search){
        setFilms(response.data.Search) 
      }
         
    }
    getFilm(search)
    
  }, [search])
 
  console.log(films)
  return (
    <div className="App">
      <Nav />
      
       {/* <h1>Movie Search</h1> */}
       <BrowserRouter>
          <Routes>
            <Route path='/search' element={<>
              <SearchMovie search={search} setSearch={setSearch}/>
              <MovieList movies={films}/>
            </>}></Route>
            <Route path="/t" element={<Testing />}></Route>
            <Route path="/movie/:id" element={<FilmDetails />}></Route>
            
          </Routes>
       </BrowserRouter>
        {/* <SearchMovie search={search} setSearch={setSearch}/> */}
      
      
      {/* {films ? <MovieList movies={films}/> : 'Type title to search'} */}
      {/* <MovieList movies={films}/> */}
      
      
       
    </div>
  );
}

export default App;


{/* <BrowserRouter>
  <Routes>
    <Route path="" elemen t={}></Route>
  </Routes>
</BrowserRouter> */}