import React from "react";

function ResultsContainer({books, savedBooks, saveBook,}) {        
    return (
        <div className="container card customCard">
                    {books.length ? (books.map((result, index) => (
                        <div className="card mt-2 mb-2" key={result._id}>
                            <div className="row">
                                <div className="col-md-2 imageStyle">
                                    <img alt={result.title} className="img-fluid customImage" src={result.image} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <div className="row">
                                            <h5 className="card-title col-8">{result.title} by {result.authors}</h5>
                                        </div>
                                        <div className="row">
                                            <p className="card-text">{result.description}</p>
                                        </div>
                                        <div className="row buttonRow">   
                                        <a href={result.link} className="btn btn-primary col-2 customBookButton" target="_blank" rel="noopener noreferrer" >More</a>
                                            <button data-index={index} onClick={saveBook} className="btn btn-success col-2 ml-2 customBookButton">
                                                {savedBooks.map(book => book._id).includes(result._id) ? "Saved!" : "Save"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))) : (<h2 style={{ textAlign: "center" }}>Search for a book!</h2>)}
                </div>
    )
}


export default ResultsContainer;