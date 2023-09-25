import React, {useState, useEffect, useContext} from "react";
import UserContext from "../context/UserContext";
import axios from "axios";



const FavButton = ({movie, search, favForClick, setFavorites}) => {
    
   
    // const [favorited, setFavorited] = useState(false);

    const user = useContext(UserContext);
    
    const username = user.data.res.username

    const movieData = {
        user_name: username,
        movie_title: movie.Title,
        movie_poster: movie.Poster,
        movie_id: movie.imdbID
    }

    async function tfavList () {
        let data = await axios.get(`http://localhost:4000/api/favorites/${username}`)
        
        // return data.data.res
    }
    
    async function addToDb(){
        const addFavorite = await axios.post(`http://localhost:4000/api/favorites/${username}`, movieData) 
    }

const handleButtonClick = (e) => {
    addToDb()
    window.location.reload()
}

    return (
        <>
        <button 
        className = "heart col-sm-3"
        onClick={handleButtonClick}
        >
            <p className="fav-label">Add to Favorites</p>
            <i className="ri-heart-add-line"></i>
        </button>
        </>
    )
}

export default FavButton;