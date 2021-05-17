import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';

function Saved() {
    return (
        <div>
            <Jumbotron />
            <div className="container my-2" id="about-me">
                <p>This is the saved page!</p>
            </div>
        </div>
    )
}

export default Saved;