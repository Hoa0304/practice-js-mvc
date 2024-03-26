import { createToast } from "./components/handleToast";
import Login from "./page/login";
import Mana from "./page/management";
import Register from "./page/register";
import Home from "./page/home";
import Router from "../router/Router";
import Form from "./components/form";

class BookView{
    constructor(){
        this.app = document.querySelector('#root');
        this.router = new Router();
        this.initRoute();
        this.main = document.createElement('div');
        this.main.classList.add('main');
        this.container = document.createElement('div');
        this.container.classList.add('container')
        this.app.appendChild(this.container)
        // add toast container
        this.toastList = document.createElement('ul');
        this.toastList.classList.add('notifications');
        this.app.appendChild(this.toastList);

        this.router.changeRoute();
    }
    login(users) {
        this.users = users;
        const formLogin = document.querySelector('.wrapper__form-log');
        formLogin?.addEventListener('click', (e) => {
            e.preventDefault();
            const email = document.querySelector('#email').value
            const password = document.querySelector('#password').value
            if (email === '') {
                createToast('warning','Please enter a email')
            }
            if (password === '') {
                createToast('warning','Please enter a password')
            }
            const foundUser = this.users.find(
                (user) => email === user.email && password === user.password);
            if (foundUser) {
                window.location.href = '/home';
            }
        })
    }
    initRoute() {
        this.router.addRoute('/', Login());
        this.router.addRoute('/management', Mana());
        this.router.addRoute('/register', Register());
        this.router.addRoute('/home', Home());
        this.router.addRoute('/form', Form());

    }
    toggleOptions(){
        const optionss = document.querySelector('.header__profile--button')
        const options = document.querySelector('.header__profile--option')

        optionss.addEventListener('click',(e) => {
            options.classList.toggle('hidden')
        })
        document.addEventListener('click',(e) => {
            const target = e.target
            if(!options.classList.contains('hidden')) {
                if(!options.contains(target) && !optionss.contains(target)) {
                    options.classList.toggle('hidden')
                }
            }
        })
    }
    logout(){
        const logout = document.querySelector('.header__profile--option')
        const ul = logout.getElementsByTagName('ul')[0]
        const li = ul.getElementsByTagName('li')[3]
        li.addEventListener('click',(e) => {
            window.location.href = '/';
        })
    }
    handleForm() {
        const form = document.querySelector('.browser-create')
        form.addEventListener('click',(e) => {
            window.location.pathname = '/form';
        })
    }
}

export default BookView;
