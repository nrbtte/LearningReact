import React from "react";
import { Outlet } from "react-router-dom";
import StyledNavigationBar from "./NavBar/NavBar";
const SharedLayout = () => {
    return(
        <>
            <StyledNavigationBar/>
            <section>
                <Outlet/>
            </section>
        </>
    );
}

export default SharedLayout;