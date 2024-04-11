<<<<<<< HEAD
import Toast from "../views/components/toast";

class BookService {
    constructor() {
        this.books = []
=======
import { createToast } from '../views/components/handleToast';
import api from '../api/books';
import Book from '../model/book.model';

class BookService {
  constructor() {
    this.books = [];
    this.users = [];
  }

  async getBooks() {
    try {
      let { data } = await api.get('/books');
      if (data) {
        data = await data.map((book) => new Book(book));
        this.books = data;
        return this.books;
      }
    } catch (error) {
      createToast('error', error);
    }
  }
  bindDataChanged(cb) {
    this.onDataChanged = cb;
  }
  async deleteBooks(id) {
    try {
      let { data } = await api.delete(`/books/${id}`);
      if (data) {
        this.books = this.books.filter((book) => {
          return book.id !== id;
        });
        this.onDataChanged(this.books);
      }
    } catch (error) {
<<<<<<< HEAD
        createToast('error', error);
>>>>>>> ca2eb89 (complete delete (#29))
=======
      createToast('error', error);
>>>>>>> ec906f5 (update (#33))
    }
  }
  async addBook(book) {
    try {
      let { data } = await api.post('/books', book);
      if (data) {
        data = await data.map((book) => new Book(book));
        this.books.push(data);
        this.onDataChanged(this.books);
      }
    } catch (error) {
      createToast('error', error);
    }
  }
  async editBook(id, newBook) {
    try {
      let { data } = await api.put(`/books/${id}`, newBook);
      if (data) {
        data = await data.map((book) => new Book(book));
        this.books = this.books.map((book) => (book.id === id ? data : book));
        this.onDataChanged(this.books);
      }
    } catch (error) {
      createToast('error', error);
    }
  }

  searchBook(key) {
    return this.books.filter((book) => {
      return book.title.toLowerCase().includes(key.toLowerCase());
    });
  }
}

export default BookService;
