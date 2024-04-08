import { createToast } from '../views/components/handleToast';

const inputValidationRules = {
  name: /^[\p{L}\d\s!@#$%^&*()[\]{};:'",.<>/?\\|-]{1,100}$/u,
  author: /^[\p{L}\s.&]{1,50}$/u,
  year: /^[\p{L}\d\s-]{1,4}$/u,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  category: /^[\p{L}\d\s-]{1,50}$/u,
  location: /^[\p{L}\d\s-]{1,50}$/u,
  inputMin: 5,
  password: /^[\p{L}\d\s-]{1,50}$/u,
};

const inputCollection = {
  name: 'Name',
  email: 'Email',
  password: 'Password',
  author: 'Author',
  year: 'Year Of Birth',
  category: 'Category',
  location: 'Location',
  category: 'Category',
};

const errorMsg = {
  require: ' cannot be empty!',
  invalid: 'Please enter valid ',
  tooShort: ' must be longer than 5 characters.',
  negativeNum: 'Value must be greater than 0.',
};

const handleValidate = (input, condition, injectClass) => {
  if (condition) {
    input.classList.remove(injectClass);
  } else input.classList.add(injectClass);
};

const checkInput = (e, eventType) => {
  const inputTarget = e.target;
  const inputValue = e.target.value;
  const inputName = e.target.name;

  if (
    inputTarget.type === 'text' ||
    inputTarget.type === 'email' ||
    inputTarget.type === 'password'
  ) {
    switch (eventType) {
      case 'focus': {
        handleValidate(inputTarget, true, 'invalid');
        break;
      }
      case 'blur': {
        const inputValidate = inputValidationRules[inputName].test(inputValue);
        if (inputValue.length <= 0) {
          createToast('error', inputCollection[inputName] + errorMsg.require);
          handleValidate(inputTarget, false, 'invalid');
          break;
        } else if (inputValue.length < inputValidationRules.inputMin) {
          createToast('error', inputCollection[inputName] + errorMsg.tooShort);
          handleValidate(inputTarget, false, 'invalid');
          break;
        }
        if (!inputValidate) {
          createToast('error', errorMsg.invalid + inputCollection[inputName]);
          handleValidate(inputTarget, inputValidate, 'invalid');
          break;
        }
        break;
      }
      default:
        break;
    }
  }
};

const validate = (form) => {
  const textInputs = form.querySelectorAll('input');
  [...textInputs].forEach((item) => {
    item.addEventListener('blur', (e) => {
      checkInput(e, 'blur');
    });

    item.addEventListener('focus', (e) => {
      checkInput(e, 'focus');
    });
  });
};

export default validate;
