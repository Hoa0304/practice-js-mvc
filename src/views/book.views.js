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

class BookView{
    constructor(){
        this.app = document.querySelector('#root')
        this.router = new Router()
        this.initRoute()
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
        this.router.define('/form', Form())   

        this.router.listen()
    }
    toggleOptions(){
        const buttonOption = document.querySelector('.header__profile--button')
        const options = document.querySelector('.header__profile--option')

        buttonOption.addEventListener('click',(e) => {
            options.classList.toggle('hidden')
        })
        document.addEventListener('click',(e) => {
            const target = e.target
            if(!options.classList.contains('hidden')) {
                if(!options.contains(target) && !buttonOption.contains(target)) {
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

    displayData(books) {
        this.books = books;
        const ttable = document.querySelector('.table__body')
        let html = ""
        this.books.forEach(book => {
            html += TBody(book)
            
        });

        let cardHtml = ''
        this.books.forEach(book => {
            cardHtml += Card(book)
            
        });
        const card = document.querySelectorAll('.home__main__recommen-card')
        card.forEach(car =>{
            car.innerHTML = cardHtml
        })

        ttable.innerHTML = html
    }
}

export default BookView;
