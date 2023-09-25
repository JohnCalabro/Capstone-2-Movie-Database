import React, {useContext, useEffect} from "react";
import UserContext from "../context/UserContext";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";
import axios from "axios";


const FavDisplay = ({favList, setFavorites}) => {
    
    const user = useContext(UserContext);
    const username = user.data.res.username
 
    useEffect(() => {
    async function favorList () {
        let data = await axios.get(`http://localhost:4000/api/favorites/${username}`)
        console.log(data.data.res)

        const result = data.data.res
        // tried to make state change w/ shallow copy did not work - stretch goal to fix this
        const resCopy = [...result]

        setFavorites(resCopy)
    }
    favorList()
}, [])
    
   
    return <>
        
        <h1>{username}'s Favorites</h1>
        
        {favList.map(movie => <div className= "col-sm-2">
               {console.log(movie.fav_id)}
                <Link to={`/movie/${movie.movie_id}`}> <img className="fav-img"src={movie.movie_poster} alt={movie.movie_title}/>
                </Link>
                <DeleteButton favoriteID={movie.movie_id}/>
            </div>)}
    </>
}

export default FavDisplay;