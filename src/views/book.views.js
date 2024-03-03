import Header from "./page/header";
import Home from "./page/home";
import Login from "./page/login";

class BookView{
    constructor(){
        this.app = document.querySelector('#root');
        this.main = document.createElement('div');
        this.main.classList.add('main');
        this.container = document.createElement('div');
        this.container.classList.add('container')
        this.app.appendChild(this.container)

        this.container.innerHTML += Home()

    }
}

export default BookView;
