import React from 'react';
import Jumbotron from '../components/Jumbotron';
import SearchForm from '../components/SearchForm';
import ResultsContainer from '../components/ResultsContainer';
import API from '../utils/API';
import './style.css';

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
            image: bookData.volumeInfo.imageLinks === undefined ? "" : bookData.volumeInfo.imageLinks.thumbnail,
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
            .then(
                res => this.setState({ books: res.data.items.map(bookData => this.createBook(bookData)) }))
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
                <ResultsContainer 
                    books={this.state.books}
                    savedBooks={this.state.savedBooks}
                    searchBook={this.searchBook}
                    saveBook={this.saveBook}
                />
            </div>
        )
    }
}

export default Search;