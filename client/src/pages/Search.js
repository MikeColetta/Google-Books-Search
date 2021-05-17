import React from 'react';
import Jumbotron from '../components/Jumbotron';
import SearchForm from '../components/SearchForm';
import API from '../utils/API';

class Search extends React.Component {

    state = {
        value: "",
        books: []
    }

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
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="container card">
                    {this.state.books.map(result => (
                        <div className="card mb-3" key={result._id}>
                            <div className="row">
                                <div className="col-md-2">
                                    <img alt={result.title} className="img-fluid" src={result.image} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">{result.title} by {result.authors}</h5>
                                        <p className="card-text">{result.description}</p>
                                        <div>
                                            <a href={result.link} className="btn btn-primary btn-outline-dark mt-3" target="_blank" rel="noopener noreferrer" >More</a>
                                            <button href={result.link} className="btn btn-success btn-outline-dark mt-3 ml-3" target="_blank" rel="noopener noreferrer" >Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Search;