import { collectData } from '../helper/validate';
import User from '../model/users.model';
import { createToast } from './components/handleToast';

class RegisterView {
  constructor() {}
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
        if (pw === confirm) {
          const usern = new User(dtb);
          console.log(usern);
          handle(usern);
        } else {
          createToast('warning', 'Confirm passwords do not match');
        }
        // clearForm(formrg);
      }
    });
  }
}

export default RegisterView;
