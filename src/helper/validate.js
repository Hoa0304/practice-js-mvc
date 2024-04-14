// eslint-disable-next-line import/prefer-default-export
export function clearForm(form) {
  const inputs = form.querySelectorAll('input');
  for (const item of inputs) {
    item.value = '';
  }
}

export function collectData(form) {
  const data = {};
  const bookForm = new FormData(form);
  for (const key of bookForm.keys()) {
    const input = form.querySelector(`[name="${key}"]`);
    switch (input.type) {
      case 'number':
        data[key] = parseInt(bookForm.get(key), 10);
        break;
      case 'checkbox':
        break;
      case 'file':
        const file = input.files[0];
        data[key] = file ? '/' + file.name : null;
        break;
      default:
        datas = bookForm.get(key);
        if (datas === 'shelf') {
          data[key] = false;
        } else if (datas === 'borrowed') {
          data[key] = true;
        } else if (datas === '') {
          data[key] = input.getAttribute('placeholder');
        } else {
          console.log(datas);
          console.log(input.getAttribute('placeholder'));
          data[key] = datas;
        }
    }
    data['hardCopy'] = form.querySelector(`[name="hard"]`).checked;
    data['eBook'] = form.querySelector(`[name="ebook"]`).checked;
    data['audioBook'] = form.querySelector(`[name="audio"]`).checked;
    // console.log(form.querySelector(`[name="select"]`).value);
  }
  return data;
}
