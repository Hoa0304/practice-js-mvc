import EditForm from "./components/editForm";

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
  }

  
}

export default ManagenmentView;
