import { createToast } from "../views/components/handleToast";

class ManagementService {
    constructor() {
        this.books = []
    }

    async deleteBooks(id) {
        try {
            let { data } = await api.delete(`/books/${id}`);
            if (data) {
                this.books = this.books.filter((book) => 
                
                {
                    return book.id!== id
                })
            }
        } catch (error) {
            createToast('error', error);
        }
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
}

export default ManagementService
