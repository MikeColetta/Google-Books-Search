import React from "react";



function SavedBooks({books, deleteBook}) {
    return (
        <div className="container card">
                    {books.length ? (books.map((result, index) => (
                        <div className="card mb-3" key={result._id}>
                            <div className="row">
                                <div className="col-md-2">
                                    <img alt={result.title} className="img-fluid" src={result.image} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <div className="row">
                                            <h5 className="card-title col-8">{result.title} by {result.authors}</h5>
                                            <a href={result.link} className="btn btn-primary btn-outline-dark col-2" target="_blank" rel="noopener noreferrer" >More</a>
                                            <button data-index={result._id} onClick={deleteBook} className="btn btn-danger btn-outline-dark col-2 ml-2 customBookButton" target="_blank" rel="noopener noreferrer" >
                                                Delete
                                            </button>
                                        </div>
                                        <div className="row">
                                            <p className="card-text">{result.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))) : (<h2 style={{ textAlign: "center" }}>Search for a book!</h2>)}
                </div>
    )
}

export default SavedBooks;