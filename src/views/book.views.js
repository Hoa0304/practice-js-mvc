import Login from './page/login';
import Mana from './page/management';
import Register from './page/register';
import Home from './page/home';
import Router from '../router/Router';
import TBody from './modules/tableBody';
import Card from './modules/card';
import LoginController from '../controller/book.controller';
import EditForm from './components/editForm';
import validate from '../helper/formValidate';
import { collectData } from '../helper/validate';
import auth from '../helper/auth';
import Book from '../model/book.model';
import { createToast } from './components/handleToast';

class BookView {
  constructor() {
    this.app = document.querySelector('#root');
    this.router = new Router();
    this.initRoute();
    this.container = document.createElement('div');
    this.container.classList.add('container');
    // add toast container
    this.toastList = document.createElement('ul');
    this.toastList.classList.add('notifications');
    this.app.appendChild(this.container);
    this.app.appendChild(this.toastList);
    this.router.changeRoute();
    const pathcr = window.location.pathname;
    auth();
    if (pathcr === '/register') {
      const formrg = document.querySelector('.formregist');
      validate(formrg);
    }
  }
  toggleForm() {
    const wrapForm = document.querySelector('.mana__form');
    const formAdd = document.querySelector('.form');
    const buttonForm = document.querySelector('.browser-create');

    buttonForm.addEventListener('click', (e) => {
      wrapForm.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (!wrapForm.classList.contains('hidden')) {
        if (!formAdd.contains(target) && !buttonForm.contains(target)) {
          wrapForm.classList.toggle('hidden');
        }
      }
    });
    validate(formAdd);
  }
  submitForm(handel, formName, id) {
    const bookData = collectData(formName);
    id ? handel(id, bookData) : handel(bookData);
  }
  checkValidForm(formname) {
    const inputs = [...formname.querySelectorAll('input')];
    return !inputs.some((input) => input.classList.contains('invalid'));
  }

  clearInvalid(formname) {
    const inputs = [...formname.querySelectorAll('input')];
    inputs.map((input) => input.classList.remove('invalid'));
  }
  bindAddUser(handle) {
    const regbutton = document.querySelector('.wrapper__form-reg');
    const formrg = document.querySelector('.formregist');

    regbutton.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.checkValidForm(formrg)) {
        const dtb = collectData(formrg);
        const pw = document.querySelector('#password');
        const confirm = document.querySelector('#confirm');
        if (pw.value === confirm.value) {
          const usern = new User(dtb);
          handle(usern);
        } else {
          createToast('warning', 'Confirm passwords do not match');
        }
        // clearForm(formrg);
      }
    });
  }
  bindSearch(handel) {
    const input = this.main.querySelector('.header__wrapper--input');
    input.addEventListener();
    const onInputChange = (e) => {
      const inputValue = e.target.value;
      handel(inputValue);
    };
  }
  login(users) {
    this.users = users;
    const formLogin = document.querySelector('.wrapper__form-log');
    const accepts = document.querySelectorAll('input[type="checkbox"]:checked');

    formLogin.addEventListener('click', (e) => {
      e.preventDefault();
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      if (email === '') {
        createToast('warning', 'Please enter a email');
      }
      if (password === '') {
        createToast('warning', 'Please enter a password');
      }
      const foundUser = this.users.find(
        (user) => email === user.email && password === user.password,
      );
      if (foundUser) {
        sessionStorage.setItem('acc', 'acc');
        window.location.href = '/home';
      }
    });
  }
  showPw() {
    console.log('showPw');
    const eye = document.querySelector('.eye');
    const eyep = document.querySelector('.eyep');
    const eyecfg = document.querySelector('.eyecf');
    eye.addEventListener('click', () => {
      const pass = document.querySelector('.passw');
      if (pass.type === 'password') {
        pass.type = 'text';
      } else {
        pass.type = 'password';
      }
    });
  }
  initRoute() {
    this.router.addRoute('/', Login());
    this.router.addRoute('/management', Mana());
    this.router.addRoute('/register', Register());
    this.router.addRoute('/home', Home());
  }
  submitForm(handel, formName, id) {
    const bookData = collectData(formName);
    id ? handel(id, bookData) : handel(bookData);
  }

  toggleOptions() {
    const buttonOption = document.querySelector('.header__profile--button');
    const options = document.querySelector('.header__profile--option');

    buttonOption.addEventListener('click', (e) => {
      options.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (!options.classList.contains('hidden')) {
        if (!options.contains(target) && !buttonOption.contains(target)) {
          options.classList.toggle('hidden');
        }
      }
    });
  }
  logout() {
    const logout = document.querySelector('.header__profile--option');
    const ul = logout.getElementsByTagName('ul')[0];
    const li = ul.getElementsByTagName('li')[3];
    li.addEventListener('click', (e) => {
      sessionStorage.removeItem('ac');
      window.location.href = '/';
    });
  }
  searchBook(books) {
    console.log('Searching');
    this.books = books;
    const searchip = document.querySelector('.searchinput');
    searchip.addEventListener('input', (e) => {
      const value = e.target.value.toLowerCase();
      this.books.forEach((book) => {
        console.log(book.name);
      });
      const filterdt = this.books.filter((book) =>
        book.name.toLowerCase().includes(value),
      );
      console.log(value);
      this.displayData(filterdt);
      if (value === '') {
        this.displayData(books);
      }
    });
  }
  displayData(books) {
    this.books = books;
    const ttable = document.querySelector('.table__body');
    let html = '';
    this.books.forEach((book) => {
      html += TBody(book);
    });

    let cardHtml = '';
    this.books.forEach((book) => {
      cardHtml += Card(book);
    });
    const card = document.querySelectorAll('.home__main__recommen-card');
    card.forEach((car) => {
      car.innerHTML = cardHtml;
    });

    ttable.innerHTML = html;
  }
  changeQuote() {
    const quote = document.querySelectorAll('.quote');
    let currentQuoteIndex = 0;
    window.addEventListener('DOMContentLoaded', () => {
      quote[0].classList.remove('hidden');
      quote[0].style.display = 'flex';
    });
    setInterval(() => {
      quote.forEach((quotes) => {
        quotes.classList.add('hidden');
        quotes.style.display = 'none';
      });
      quote[currentQuoteIndex].classList.remove('hidden');
      quote[currentQuoteIndex].style.display = 'flex';
      currentQuoteIndex = (currentQuoteIndex + 1) % quote.length;
    }, 2000);
  }
  toggleFormEdit(books, handle) {
    this.books = books;
    const wrapForm = document.querySelector('.mana__editForm');
    const buttonForm = document.querySelectorAll('.editbtn');
    buttonForm.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        wrapForm.classList.toggle('hidden');
        const parenttr = btn.closest('.bookitem');
        const id = parenttr.getAttribute('data-id');
        this.books.forEach((book) => {
          if (book.id === id) {
            wrapForm.innerHTML = EditForm(book);
            const btncancel = document.querySelector('.btncancel');
            btncancel.addEventListener('click', (e) => {
              e.preventDefault();
              wrapForm.classList.toggle('hidden');
            });
          }
        });
        const buttoncancel = document.querySelector('.btncancel');
        const btnedits = document.querySelector('.btnedits');
        btnedits.addEventListener('click', (e) => {
          e.preventDefault();
          const formEdit = document.querySelector('.editForm');
          console.log(formEdit);
          let dtb = collectData(formEdit);
          for (let i in dtb) {
          }
          if (dtb.location === '') {
            dtb.location = 'CS A-15';
          }
          let dataBook = this.books.find((item) => item.id === id);
          for (let i in dtb) {
            if (dataBook[i] !== dtb[i]) {
              dataBook[i] = dtb[i];
            }
          }
          handle(id, dataBook);
        });
      });
    });
  }
  bindDelete(handle) {
    const deleteBtn = document.querySelectorAll('.deletebtn');
    deleteBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const parent = btn.closest('.bookitem');
        const id = parent.getAttribute('data-id');
        handle(id);
        this.displayData(this.books);
      });
    });
  }

  checkValidForm(formname) {
    const inputs = [...formname.querySelectorAll('input')];
    return !inputs.some((input) => input.classList.contains('invalid'));
  }

  clearInvalid(formname) {
    const inputs = [...formname.querySelectorAll('input')];
    inputs.map((input) => input.classList.remove('invalid'));
  }

  handelToggleModal() {
    const closeModal = this.app.querySelector('#close-btn');
    const openModal = this.app.querySelector('#add-btn');
    openModal.addEventListener('click', () => {
      if (this.modal.classList.contains('hidden')) {
        this.clearInvalid();
        this.modal.classList.remove('hidden');
        this.main.classList.add('blur');
        this.toggleBtn();
      }
    });
    closeModal.addEventListener('click', () => {
      this.modal.classList.add('hidden');
      this.main.classList.remove('blur');
      clearForm(this.form);
    });
  }

  bindAddBook(handle) {
    const addBtn = document.querySelector('.form-button');
    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const formAdd = document.querySelector('.form');
      if (this.checkValidForm(formAdd)) {
        let dtb = collectData(formAdd);
        if (dtb.location === '') {
          dtb.location = 'CS A-15';
        }
        console.log(dtb.location);
        const book = new Book(dtb);
        handle(book);
        createToast('info', 'Insert Success!');
      } else createToast('warning', 'Insert Failed: Check your data!');
    });
  }
}

export default BookView;
