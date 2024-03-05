const Form =  () => {
    return `
    <section class="wrap">
        <form action="popup" class="form">
            <label for="image">Image Book</label>
            <input type="file"class="form-file">
            <label for="name">Name Book</label>
            <input type="text" placeholder="Enter Name" class="form-input">
            <label for="author">Author Book</label>
            <input type="text" placeholder="Enter Author" class="form-input">
            <label for="year">Year Of Birth</label>
            <input type="text" placeholder="Enter Year Of Birth" class="form-input">
            <label for="category">Category</label>
            <input type="text" placeholder="Enter Category" class="form-input">
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
            <label for="status">Status</label><br/>
            <select name="status" id="status" class="form-select">
                <option value="shelf">In-Shelf</option>
                <option value="borrowed">Borrowed</option>
            </select>
            <select name="address" id="address" class="form-select">
                <option value="cs">CS A-15</option>
                <option value="sriram">Sriram</option>
            </select><br/>
            <button class="form-button">Add</button>
        </form>
    </section>
    `
}

export default Form;
