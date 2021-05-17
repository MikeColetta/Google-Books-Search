import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import ResultsContainer from '../components/ResultsContainer';
import SearchForm from '../components/SearchForm';

function Search() {
    return (
        <div>
            <Jumbotron />
            <SearchForm />
            <ResultsContainer />
        </div>
    )
}

export default Search;