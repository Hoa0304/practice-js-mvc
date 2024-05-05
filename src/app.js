import BookView from './views/book.views';
import LoginController from './controller/book.controller';
import BookService from './services/book.service';

new LoginController(new BookView(), new BookService());
