import { createToast } from './components/handleToast';

class LoginView {
  constructor() {}

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
}

export default LoginView;