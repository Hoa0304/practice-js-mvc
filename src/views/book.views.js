import { createToast } from "./components/handleToast";
import Login from "./page/login";
import Mana from "./page/management";
import Register from "./page/register";
import Home from "./page/home";
import Router from "../router/Router";
import Form from "./components/form";
import TBody from "./modules/tableBody";
import Card from "./modules/card";
import LoginController from "../controller/login.controller";
import LoginView from "./login.view";
import LoginService from "../services/login.service";
import HomeController from "../controller/home.controller";
import HomeView from "./home.view";
import HomeService from "../services/home.service";
import ManagenmentView from "./management.view";
import ManagementService from "../services/management.service";
import ManagementController from "../controller/management.controller";
import EditForm from "./components/editForm";

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
        this.toastList = document.createElement('ul')
        this.toastList.classList.add('notifications')
        this.app.appendChild(this.toastList)
        
        let { controller, service, view } = this.router.findRoute()
        if (view) view = new view()
        if (service) service = new service()
        if (controller) controller = new controller(view, service)
    }
    
    initRoute() {
        this.router.define('/', Login(), LoginController, LoginView, LoginService)
        this.router.define('/management', Mana(), ManagementController, ManagenmentView, ManagementService)
        this.router.define('/register', Register())
        this.router.define('/home', Home(), HomeController, HomeView, HomeService)
        this.router.listen()
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
    toggleFormEdit(books) {
        this.books = books;
        const wrapForm = document.querySelector('.mana__editForm');
        const formEdit = document.querySelector('.editForm');
        const buttonForm = document.querySelectorAll('.editbtn');
        const buttoncancel = document.querySelector(".btncancel");
        buttonForm.forEach((btn)=>{
            btn.addEventListener('click', (e) => {
                wrapForm.classList.toggle('hidden');
                const parenttr = btn.closest('.bookitem');
                const id = parenttr.getAttribute('data-id');
                this.books.forEach((book) => {
                    if(book.id === (id)){
                        wrapForm.innerHTML= EditForm(book);
                        const btncancel = document.querySelector(".btncancel")
                        btncancel.addEventListener('click', (e) => {
                            e.preventDefault();
                            wrapForm.classList.toggle('hidden');
                        })
                    }
                });
            });
        })  
    }
    bindDelete(handle) {
        const deleteBtn = document.querySelectorAll('.deletebtn')
        deleteBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const parent = btn.closest('.bookitem');
                const id = parent.getAttribute('data-id');
                handle(id)
                this.displayData(this.books)
            })
        })
    }

}

export default BookView;
