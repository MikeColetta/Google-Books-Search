import React from "react";
import './style.css'

function SearchForm(props) {
    return (
        <div className="container card mb-3 customCard">
            <div className="mt-2 mb-2">
                <h5 className="mt-1 bookHeading">Book Search</h5>
                <form className="form-inline">
                    <p className="bookHeading">Book</p>
                    <input
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="search"
                        type="text"
                        className="form-control mt-2 ml-2 customInput"
                        id="search"
                        placeholder="Search for a book!">
                    </input>
                    <button onClick={props.handleFormSubmit} className="btn btn-primary customButton">
                        Search
                        </button>
                </form>
            </div>
        </div>
    )
}

export default SearchForm;