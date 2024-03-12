import Login from "./page/login";

class BookView{
    constructor(){
        this.app = document.querySelector('#root');
        this.main = document.createElement('div');
        this.main.classList.add('main');
        this.container = document.createElement('div');
        this.container.classList.add('container')
        this.app.appendChild(this.container)

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

        this.container.innerHTML += Login()

    }
}

export default BookView;
