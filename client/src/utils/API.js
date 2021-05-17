import axios from 'axios';

export default {
    //Grabs a book from the Google API
    getGooglebooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    //Saves a book to DB
    saveBook: function(bookInfo) {
        return axios.post("/api/books", bookInfo);
    },
    //Gets a book from the saved books DB
    getBooks: function() {
        return axios.get("/api/books");
    },
    //Gets a book by its ID
    getBook: function(id) {
        return axios.get("/api/books/" + id)
    },
    //Deletes a book from the DB
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
}