import React from 'react';
import Jumbotron from '../components/Jumbotron';
import SavedBooks from '../components/SavedBooks';
import API from '../utils/API';


class Saved extends React.Component {
    
    state = {
        savedBooks: []
    }

    componentDidMount(){
        this.getSavedBooks();
    }

    deleteBook = event =>{
        console.log('delete')
        let id = event.target.getAttribute("data-index")
        API.deleteBook(id)
            .then(this.setState(savedBooks))
            .catch(err => console.error(err));
    };

    getSavedBooks() {
        API.getBooks()
            .then(res => {
                console.log(res)
                this.setState({ savedBooks: res.data })
            })
            .catch(err => console.error(err));
    };

    render() {
        console.log(this.state.savedBooks)
    return (
        <div>
            <Jumbotron />
            <SavedBooks 
                books = {this.state.savedBooks}
                deleteBook = {this.deleteBook}

            />
        </div>
    )
    }
}

export default Saved;