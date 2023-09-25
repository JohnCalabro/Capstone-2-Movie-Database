import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import SearchMovie from "./SearchMovie";

import FilmDetails from "./Components/FilmDetails";
import MovieList from './Components/MovieList';
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import UserContext from "./context/UserContext";
import { ContextProvider } from "./context/AuthContext";


import axios from "axios";

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));


  useEffect(() => {
    const getFilm = async (search) => {
      const url = `https://www.omdbapi.com/?s=${search}&apikey=dcb23672`
      const response = await axios.get(url);
      
      if(response.data.Search){
        setFilms(response.data.Search) 
      }
         
    }
    getFilm(search)
    
  }, [search])
 
  console.log(films)
  return (
    <div className="App">
     
       <ContextProvider> 
        <UserContext.Provider value={user ? user : null}>                     
       <BrowserRouter>   
        <Nav />
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
            <Route path='/search' element={<>
              <SearchMovie search={search} setSearch={setSearch}/>
              <div className="container-fluid"> 
              <div className="row">
              <MovieList movies={films} search={search} favs={favorites} setFavorites={setFavorites}/>
              </div>
              </div>
            </>}></Route>
            <Route path="/movie/:id" element={<FilmDetails />}></Route>
          </Routes>
          
       </BrowserRouter>
       </UserContext.Provider>  
       </ContextProvider>
  
    </div>
  );
}

export default App;


