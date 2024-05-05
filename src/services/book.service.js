import { createToast } from '../views/components/handleToast';
import api from '../api/books';
import Book from '../model/book.model';
import User from '../model/users.model';

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
      createToast('error', error);
    }
  }
  async addBook(book) {
    try {
      let { data } = await api.post('/books', book);
      if (data) {
        this.books.push(data);
        this.onDataChanged(this.books);
      }
    } catch (error) {
      createToast('error', error);
    }
  }
  async edit(id, newBook) {
    try {
      const { data } = await api.patch(`books/${id}`, newBook);
      if (data) {
        this.books = this.books.map((book) =>
          book.id === id ? new Book({ ...book, ...newBook }) : book,
        );
        this.onDataChanged(this.books);
      }
    } catch (error) {
      createToast('error', error);
    }
  }

  searchBook(key) {
    this.books = this.books.filter((book) => {
      return book.title.toLowerCase().includes(key.toLowerCase());
    });
    this.onDataChanged(this.books);
  }
  async getUsers() {
    try {
      let { data } = await api.get('/users');
      if (data) {
        data = await data.map((user) => new User(user));
        this.users = data;
        return this.users;
      }
    } catch (error) {
      createToast('error', error);
    }
  }
  async register(user) {
    console.log(user);
    try {
      let { data } = await api.post('/users', user);
      if (data) {
        this.user = data;
        console.log(this.user);
        createToast('info', 'Successfully registered');
        return this.user;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default BookService;
