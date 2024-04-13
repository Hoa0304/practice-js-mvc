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
            <select name="borrowed" id="status">
            <option value="borrowed" defaultSelected>Borrowed</option>
                <option value="shelf">In-Shelf</option>
            </select>`;
        } else {
          return `
            <select name="borrowed" id="status">
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
        <input type="file"  name = "image" accept=".svg"> 
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
                <input type="checkbox" name="hard" class="hardCP" ${checkit('hard')} >
                <label for="hard">Hard Copy</label>
            </div>
            <div class="form-box">
                <input type="checkbox" name="ebook" class="eBook" ${checkit('ebook')}>
                <label for="ebook">E - Book</label>
            </div>
            <div class="form-box">
                <input type="checkbox" name="audio"  class="aBook" ${checkit('audio')}>
                <label for="audio">Audio Book</label>
            </div>
            <div class="form-status">
            ${Status()}
            </div>
            <button class="form-button btnedits">Save</button>
            <button class="form-button btncancel">Cancel</button>
        </form>
    </section>
    `;
}

export default EditForm;
