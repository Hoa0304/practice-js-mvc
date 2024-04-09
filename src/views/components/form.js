import Status from '../modules/status';

const Form = () => {
  return `
    <section class="wrap">
        <form action="popup" class="form">
             <div class = "wrap-selectFile form-file">
             <input type="file"> 
             <label for="file" class="form-image">Choose photo</label>
             </div>
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
            <div class="form-status">
            ${Status()}
            </div>
            <button class="form-button">Add</button>
        </form>
    </section>
    `;
};

export default Form;
