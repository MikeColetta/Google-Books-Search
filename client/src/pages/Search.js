import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';

function Search() {
    return (
        <div>
            <Jumbotron />
            <div className="container my-2" id="about-me">
                <p>This is the search page!</p>
            </div>
        </div>
    )
}

export default Search;