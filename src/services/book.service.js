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
}

export default BookService;
