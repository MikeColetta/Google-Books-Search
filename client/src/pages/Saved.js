import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import SavedBooks from '../components/SavedBooks';

function Saved() {
    return (
        <div>
            <Jumbotron />
            <SavedBooks />
        </div>
    )
}

export default Saved;