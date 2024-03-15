import TBody from "../modules/tableBody";

const Table = () => {
    return `
    <table class="table">
        <thead class="table__header">
            <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Availability</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody class="table__body">
        </tbody>
    </table>
    `
}

export default Table;
