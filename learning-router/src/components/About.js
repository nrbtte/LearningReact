import React from "react";
import { Link, Outlet } from "react-router-dom";
const About = () => {
    return(
        <div>
            <h1>About</h1>
            <p>Here you will find information about this page.</p>
            <Link to='/about/mission'>Mission</Link>
            <Outlet/>
        </div>
    );
}

export default About;