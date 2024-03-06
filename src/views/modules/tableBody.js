import { think, tick, trac} from '../../resources/assets/image';

const TBody = () => {
    return `
    <tr>
        <td>
            <figure class="title">
                <img src="${think}" alt="">
                <figcaption>
                    <span class="title-name">Don’t Make Me Think </span><br>
                    <span class="title-author">Don Norman, 1988</span><br>
                    <p>Second Edition</p>
                </figcaption>
            </figure>
        </td>
        <td>
            <span class="category">Computer Science</span>
            <span class="design">UX Design</span>
        </td>
        <td>
            <div class="availability">
                <figure class="availability__wrap">
                    <img src="${tick}" alt="tick">
                    <figcaption>Hard Copy</figcaption>
                </figure>
                <figure class="availability__wrap">
                    <img src="${tick}" alt="tick">
                    <figcaption>E - Book</figcaption>
                </figure>
                <figure class="availability__wrap">
                    <img src="${tick}" alt="tick">
                    <figcaption>Audio book</figcaption>
                </figure>
            </div>
        </td>
        <td>
            <span class="status">
                In-Shelf
            </span>
            <figure class="location">
                <img src="${trac}" alt="">
                <figcaption>CSS A-15</figcaption>
            </figure>
        </td>
        <td>
            <button>Delete</button>
            <button>Edit</button>
        </td>
    </tr>
    `
}

export default TBody;
