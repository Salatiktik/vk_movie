import React from "react";
import classes from './header.module.css';
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation()
    return (
        <div className={(/[/]movie[/][\d]+/g).test(location.pathname)? classes.redHeader:classes.header}>
            <nav className={classes.headerBlock}>
                <NavLink className={classes.link} to={"/movies"}>Фильмы</NavLink>
            </nav>
        </div>
    );
}
 
export default Header;