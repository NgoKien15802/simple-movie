import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex items-center justify-center py-5 gap-x-5">
            <NavLink
                to={"/simple-movie"}
                className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
                Home
            </NavLink>
            <NavLink
                to={"/simple-movie/movie"}
                className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
                Movies
            </NavLink>
        </header>
    );
};

export default Header;
