import Login from "./page/login";
<<<<<<< HEAD
=======
import Mana from "./page/management";
import Register from "./page/register";
import Home from "./page/home";
import Router from "../router/Router";
import Form from "./components/form";
import TBody from "./modules/tableBody";
>>>>>>> fcbaad3 (table (#17))

class BookView{
    constructor(){
        this.app = document.querySelector('#root');
        this.main = document.createElement('div');
        this.main.classList.add('main');
        this.container = document.createElement('div');
        this.container.classList.add('container')
        this.app.appendChild(this.container)
<<<<<<< HEAD
=======
        
        // add toast container
        this.toastList = document.createElement('ul');
        this.toastList.classList.add('notifications');
        this.app.appendChild(this.toastList);
>>>>>>> fcbaad3 (table (#17))


        this.container.innerHTML += Login()

<<<<<<< HEAD
=======
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

    displayData(books) {
        this.books = books;
        console.log(books)
        const ttable = document.querySelector('.table__body')
        let html = ""
        this.books.forEach(book => {
            html += TBody(book)
            
        });

        ttable.innerHTML = html
        console.log(html)
>>>>>>> fcbaad3 (table (#17))
    }
    // handleForm() {
    //     const form = document.querySelector('.browser-create')
    //     form.addEventListener('click',(e) => {
    //         window.location.pathname = '/form';
    //     })
    // }
}

export default BookView;
