import React from 'react';
import Jumbotron from '../components/Jumbotron';
import SavedBooks from '../components/SavedBooks';

class Saved extends React.Component {
    render() {
    return (
        <div>
            <Jumbotron />
            <SavedBooks />
        </div>
    )
    }
}

export default Saved;