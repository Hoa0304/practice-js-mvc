import User from '../model/users.model';
import { clearForm, collectData } from '../helper/validate';
import { createToast } from './components/handleToast';

class RegisterView {
  constructor() {}
  submitForm(handel, formName, id) {
    const bookData = collectData(formName);
    console.log(bookData);
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
        const usern = new User(dtb);
        console.log(usern);
        handle(usern);
        // clearForm(formrg);
      }
    });
  }
}

export default RegisterView;
