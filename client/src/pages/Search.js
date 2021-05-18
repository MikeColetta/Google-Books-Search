import React from 'react';
import Jumbotron from '../components/Jumbotron';
import SearchForm from '../components/SearchForm';
import API from '../utils/API';
import './style.css'

class Search extends React.Component {

    state = {
        value: "",
        books: [],
        savedBooks: [],
    }

    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks() {
        API.getBooks()
            .then(res => {
                this.setState({ savedBooks: res.data })
            })
            .catch(err => console.error(err));
    };

    createBook = bookData => {
        return {
            _id: bookData.id,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink,
            title: bookData.volumeInfo.title,

        }
    }

    saveBook = event => {
        let index = event.target.getAttribute("data-index");
        let currentBook = this.state.books[index]
        API.saveBook(currentBook)
            .then(() => this.componentDidMount())
            .catch(err => console.error(err));
    };

    searchBook = query => {
        API.getGooglebooks(query)
            .then(res => this.setState({ books: res.data.items.map(bookData => this.createBook(bookData)) }))
            .catch(err => console.error(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search)
    }

    render() {
        return (
            <div>
                <Jumbotron />
                <SearchForm
                    search={this.state.search || ""}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="container card customCard">
                    {this.state.books.length ? (this.state.books.map((result, index) => (
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
                                            <button data-index={index} onClick={this.saveBook} className="btn btn-success col-2 ml-2 customBookButton">
                                                {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Saved!" : "Save"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))) : (<h2 style={{ textAlign: "center" }}>Search for a book!</h2>)}
                </div>
            </div>
        )
    }
}

export default Search;