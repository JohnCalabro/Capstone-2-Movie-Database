import React from "react";

const SearchMovie = ({search, setSearch}) => {

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <input 
        value={search}
        onChange={handleChange}
        placeholder="Search Film"
        />
    )
}

export default SearchMovie;