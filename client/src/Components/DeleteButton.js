import React, {useContext} from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

const DeleteButton = ({favoriteID}) => {

    const movie_id = favoriteID

    const user = useContext(UserContext);
    
    const user_name = user.data.res.username

    async function deleteFromDB(movie_id, user_name) {
        const delFav = await axios.delete(`http://localhost:4000/api/favorites/${user_name}/${movie_id}`)
    }

    const handleDelete = (e) => {
        deleteFromDB(movie_id, user_name)
        window.location.reload(false)
    }

    return <>
    
        <button 
        className="trash"
        onClick={handleDelete}
        >
            Remove Favorite
            <i className="ri-delete-bin-line"></i>
            
        </button>
    </>
}

export default DeleteButton;

