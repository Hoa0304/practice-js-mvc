import { pp, sub, tick, trac, union } from '../../resources/assets/image';

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
          return pp;
        } else {
          return trac;
        }
        break;
       case 'lction':
        if (book.borrowed) {
          return book.location;
        } else {
          return "CS A-15";
        }
        break;
      default:
    }
  }
  return `
    <tr class="bookitem" data-id="${book.id}">
        <td>
            <figure class="title">
                <img src="${book.image}" alt="">
                <figcaption>
                    <span class="name">${book.name} </span><br>
                    <span class="extra">$${book.author}, ${book.year}</span>
                    <p>Second Edition</p>
                </figcaption>
            </figure>
        </td>
        <td>
            <div class="category">
                <span class="name">${book.category}</span>
                <span class="extra">UX Design</span>
            </div>
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
                    <figcaption class="extra">${checkit('lction')}</figcaption>
                </figure>
            </div>
        </td>
        <td>
            <button class="extra deletebtn">Delete</button>
            <button class="extra editbtn">Edit</button>
        </td>
    </tr>
    `;
};

export default TBody;
