import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FilmDetails = () => {

    const [details, setDetails] = useState([]);

    const { id } = useParams();

    useEffect(() => {
    const getFilm = async (id) => {
      const url = `https://www.omdbapi.com/?i=${id}&apikey=dcb23672`
      const response = await axios.get(url);
      console.log(response.data.Title)
      console.log(response.data.Actors)
      
     
      if(response.data){
        setDetails(response.data) 
        console.log(details)
      }
         
    }
    getFilm(id)
    
  }, [])

    return (
        <>
            
            <h1>{details.Title}</h1>
            <p>{details.Plot}</p>
            <p>Year: {details.Year}</p>
            <p>Rated: {details.Rated}</p>
            <p> Main Cast: {details.Actors}</p>
            <p>Awards: {details.Awards}</p>
           
            
        </>
    )
}

export default FilmDetails;


// https://www.omdbapi.com/?i=tt3896198&apikey=dcb23672


// useEffect(() => {
//     const getFilm = async (search) => {
//       const url = `https://www.omdbapi.com/?s=${search}&apikey=dcb23672`
//       const response = await axios.get(url);
//       console.log(response.data.Search)
      
     
//       if(response.data.Search){
//         setFilms(response.data.Search) 
//       }
         
//     }
//     getFilm(search)
    
//   }, [search])