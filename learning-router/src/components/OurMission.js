import React from "react";
import { Link } from "react-router-dom";
const Mission = () => {
    return(
        <div>
            <h1>Mission</h1>
            <p>This is an extremely important website.</p>
            <p>Our mission is to learn React Router V6 and practice Git commands</p>
            <Link to='/'>Home</Link>
        </div>
    );
}

export default Mission;