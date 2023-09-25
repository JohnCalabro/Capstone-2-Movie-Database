import React, {useState, useContext} from "react";
import "../App.css";
import ThemeContext from "../ThemeContext";

const Testing = () => {

    const color = useContext(ThemeContext);

    return (<>
            <h1>Testing images for styles for future use</h1>
            <button style={{color}}>Display Color Test BTN</button>
            <div className>
                <img className="test" src="https://images.unsplash.com/photo-1463852247062-1bbca38f7805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9ua2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"></img>
                <img className="test" src="https://images.unsplash.com/photo-1604826010917-65cf53d6249b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnJvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"></img>
                <img className="test" src="https://images.unsplash.com/photo-1590536527363-f11dce09bbe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNsb3RofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"></img>
            </div>
    </>)
}

export default Testing;