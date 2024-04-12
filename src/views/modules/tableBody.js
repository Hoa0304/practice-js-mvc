import { sub, tick, trac, union } from '../../resources/assets/image';

const TBody = (book) => {
  function checkit(item) {
    switch (item) {
      case 'hard':
        if (book.hardCopy) {
          return tick;
        } else {
          return sub;
        }
        break;
      case 'ebook':
        if (book.eBook) {
          return tick;
        } else {
          return sub;
        }
        break;
      case 'audio':
        if (book.audioBook) {
          return tick;
        } else {
          return sub;
        }
        break;
      case 'stt':
        if (book.borrowed) {
          return 'Borrowed';
        } else {
          return 'In-Shelf';
        }
        break;
      case 'ic':
        if (book.borrowed) {
          return '';
        } else {
          return trac;
        }
        break;
      default:
    }
  }
  return `
    <tr class="bookitem" data-id="${book.id}">
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
                    <img src="${checkit('hard')}" alt="tick">
                    <figcaption class="extra">Hard Copy</figcaption>
                </figure>
                <figure class="availability__wrap">
                    <img src="${checkit('ebook')}" alt="tick">
                    <figcaption class="extra">E - Book</figcaption>
                </figure>
                <figure class="availability__wrap">
                    <img src="${checkit('audio')}" alt="tick">
                    <figcaption class="extra">Audio book</figcaption>
                </figure>
            </div>
        </td>
        <td>
            <div class="status">
                <span class="extra">
                    ${checkit('stt')}
                </span>
                <figure class="status__location">
                    <img src="${checkit('ic')}" alt="">
                    <figcaption class="extra">CS A-15</figcaption>
                </figure>
            </div>
        </td>
        <td>
            <button>Delete</button>
            <button>Edit</button>
        </td>
    </tr>
    `
}

export default TBody;
