import Status from '../modules/status';

function EditForm(book) {
  function checkit(item) {
    switch (item) {
      case 'hard':
        var hardcp = book.hardCopy;
        if (hardcp) {
          return 'checked';
        } else {
          return '';
        }
        break;
      case 'ebook':
        const ebookcp = book.eBook;
        if (ebookcp) {
          return 'checked';
        } else {
          return '';
        }
        break;
      case 'audio':
        const audiocp = book.audioBook;
        if (audiocp) {
          return 'checked';
        } else {
          return '';
        }
        break;
      case 'borrow':
        const borrowcp = book.borrowed;
        console.log(book.borrowed);
        if (borrowcp) {
          return `
            <select name="status" id="status">
            <option value="borrowed" defaultSelected>Borrowed</option>
                <option value="shelf">In-Shelf</option>
            </select>`;
        } else {
          return `
            <select name="status" id="status">
                <option value="shelf" defaultSelected>In-Shelf</option>
                <option value="borrowed">Borrowed</option>
            </select>`;
        }
        break;
    }
  }
  return `
    <section class="wrap">
        <form action="" class="editForm" data-id= "${book.id}">
        <div class = "wrap-selectFile form-file">
        <input type="file"> 
        <label for="file" class="form-image">Choose photo</label>
        </div>
            <label for="name">Name Book</label>
            <input type="text" placeholder="${book.name}" class="form-input">
            <label for="author">Author Book</label>
            <input type="text" placeholder="${book.author}" class="form-input">
            <label for="year">Year Of Birth</label>
            <input type="text" placeholder="${book.year}" class="form-input">
            <label for="category">Category</label>
            <input type="text" placeholder="${book.category}" class="form-input">
            <label for="availability">Availability</label>
            <div class="form-box">
                <input type="checkbox" name="hard" id="checked" class="hardCP" ${checkit('hard')} >
                <label for="hard">Hard Copy</label>
            </div>
            <div class="form-box">
                <input type="checkbox" name="ebook" id="checked" class="eBook" ${checkit('ebook')}>
                <label for="ebook">E - Book</label>
            </div>
            <div class="form-box">
                <input type="checkbox" name="audio" id="checked" class="aBook" ${checkit('audio')}>
                <label for="audio">Audio Book</label>
            </div>
            <div class="form-status">
            <section class="option">
            <label for="status" class="status">Status</label><br/>
             ${checkit('borrow')}
            <i class="fa-solid fa-chevron-down icon"></i>
            <input type="text" name="customer" placeholder="${book.location}" id="address">
        </section>
            </div>
            <button class="form-button">Save</button>
            <button class="form-button btncancel">Cancel</button>
        </form>
    </section>
    `;
}

export default EditForm;
