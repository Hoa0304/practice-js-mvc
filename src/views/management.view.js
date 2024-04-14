import validate from '../helper/formValidate';
class ManagenmentView {
  constructor() {}
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
  bindSearch(handel) {
    const input = this.main.querySelector('.header__wrapper--input');
    input.addEventListener();
    const onInputChange = (e) => {
      const inputValue = e.target.value;
      handel(inputValue);
    };
  }
}

export default ManagenmentView;
