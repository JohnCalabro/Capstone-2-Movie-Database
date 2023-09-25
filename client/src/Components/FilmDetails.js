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
      
      if(response.data){
        setDetails(response.data) 
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





