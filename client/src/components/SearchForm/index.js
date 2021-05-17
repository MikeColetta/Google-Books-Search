import React from "react";

function SearchForm(props) {
    return (
        <div className="container">
            <div className=" card mb-3">
                <form className="form-inline">
                    <input
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="search"
                        type="text"
                        className="form-control mt-2"
                        id="search"
                        placeholder="Search for a book!">
                    </input>
                    <button onClick={props.handleFormSubmit} className="btn btn-primary">
                        Search
                        </button>
                </form>
            </div>
        </div>
    )
}

export default SearchForm;