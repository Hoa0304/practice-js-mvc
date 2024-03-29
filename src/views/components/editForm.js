import Status from "../modules/status";

function EditForm(book){
    return `
    <section class="wrap">
        <form action="" class="editForm" data-id= "${book.id}">
            <label for="file" class="form-image">Choose photo</label>
            <input type="file" class="form-file">
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
                <input type="checkbox" name="hard" id="checked">
                <label for="hard">Hard Copy</label>
            </div>
            <div class="form-box">
                <input type="checkbox" name="ebook" id="checked">
                <label for="ebook">E - Book</label>
            </div>
            <div class="form-box">
                <input type="checkbox" name="audio" id="checked">
                <label for="audio">Audio Book</label>
            </div>
            <div class="form-status">
            ${Status()}
            </div>
            <button class="form-button">Save</button>
            <button class="form-button btncancel">Cancel</button>
        </form>
    </section>
    `
}

export default EditForm;
