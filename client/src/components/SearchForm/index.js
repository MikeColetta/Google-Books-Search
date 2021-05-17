import React from "react";

function SearchForm(props) {
    return (
        <div className="container">
            <div className=" card mb-3">
                <form className="form-inline">
                    <input
                        value={props.value}
                        onChange={props.handleInputChange}
                        type="search"
                        className="form-control mt-2"
                        id="searchInput"
                        placeholder="Search for a book!">
                    </input>
                    <button className="btn btn-primary">Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchForm;