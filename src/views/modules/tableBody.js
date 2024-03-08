import { think, tick, trac} from '../../resources/assets/image';

const TBody = () => {
    return `
    <tr>
        <td>
            <figure class="title">
                <img src="${think}" alt="">
                <figcaption>
                    <span class="name">Don’t Make Me Think </span><br>
                    <span class="extra">Steve Krug, 2000</span>
                    <p>Second Edition</p>
                </figcaption>
            </figure>
        </td>
        <td>
            <div class="category">
                <span class="name">Computer Science</span>
                <span class="extra">UX Design</span>
            </div>
        </td>
        <td>
            <div class="availability">
                <figure class="availability__wrap">
                    <img src="${tick}" alt="tick">
                    <figcaption class="extra">Hard Copy</figcaption>
                </figure>
                <figure class="availability__wrap">
                    <img src="${tick}" alt="tick">
                    <figcaption class="extra">E - Book</figcaption>
                </figure>
                <figure class="availability__wrap">
                    <img src="${tick}" alt="tick">
                    <figcaption class="extra">Audio book</figcaption>
                </figure>
            </div>
        </td>
        <td>
            <div class="status">
                <span class="extra">
                    In-Shelf
                </span>
                <figure class="status__location">
                    <img src="${trac}" alt="">
                    <figcaption class="extra">CS A-15</figcaption>
                </figure>
            </div>
        </td>
        <td>
            <button class="extra">Delete</button>
            <button class="extra">Edit</button>
        </td>
    </tr>
    `
}

export default TBody;
