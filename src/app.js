import BookView from './views/book.views';
import BookController from './controller/login.controller';
import BookService from './services/book.service';
import RegisterController from './controller/register.controller';
import RegisterView from './views/register.view';

new BookController(new BookView(), new BookService());
