import TBody from "../modules/tableBody";

const Table = () => {
    return `
    <table class="table">
        <thead class="table__head">
            <th>Title</th>
            <th>Category</th>
            <th>Availability</th>
            <th>Status</th>
        </thead>
        <tbody class="table__body">
            ${TBody()}
        </tbody>
    </table>
    `
}

export default Table;
