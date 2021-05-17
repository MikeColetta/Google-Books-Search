import { Link } from "react-router-dom"
import React from "react";
import './style.css'

function Navbar() {
    return (
<nav className="navbar bg-dark navbar-dark sticky-top navbar-expand-md">
<div className="container-fluid">
    <Link to="/" className="navbar-brand">
        <h1 className="navbar-name">Google Books</h1>
    </Link>
    <button className="navbar-toggler dropdownButton" type="button" data-toggle="collapse" data-target="#portfolio-navbar"
        aria-controls="portfolio-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon dropdownIcon"></span>
    </button>
    <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
            <li className="dropdown-item">
                <Link to="/search" className="navlink customNavLink">Search</Link>
            </li>
            <li className="dropdown-item">
                <Link to="/saved" className="navlink customNavLink">Saved</Link>
            </li>
        </ul>
    </div>
</div>
</nav>
    )
}

export default Navbar;