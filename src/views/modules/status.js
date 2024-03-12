const Status = () => {
    return `
    <section class="option">
        <label for="status" class="status">Status</label><br/>
        <select name="status" id="status">
            <option value="shelf">In-Shelf</option>
            <option value="borrowed">Borrowed</option>
        </select>
        <i class="fa-solid fa-chevron-down icon"></i>
        <select name="address" id="address">
            <option value="cs">CS A-15</option>
            <option value="sriram">Sriram</option>
        </select>
        <i class="fa-solid fa-chevron-down icon"></i>
    </section>
    `
}

export default Status;
