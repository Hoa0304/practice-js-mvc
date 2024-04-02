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
  bindDataChanged(cb){
    this.onDataChanged = cb;
  }
  async deleteBooks(id) {
    try {
        let { data } = await api.delete(`/books/${id}`);
        if (data) {
            this.books = this.books.filter((book) => 
            {
                return book.id!== id
            })
            this.onDataChanged(this.books);
        }
    } catch (error) {
        createToast('error', error);
    }
}
}

export default BookService;
