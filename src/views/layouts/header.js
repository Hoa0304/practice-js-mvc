import { ACCOUNT } from '../../constants/constant';
import { search, qr, me, poly } from '../../resources/assets/image';

const Header = () => {
  return `
    <header class="header">
        <span class="menu-toggle">&equiv;</span>
        <div class="header__wrapper">
            <select class="header__wrapper--quick">
                <option value="">All</option>
                <option value="first">Title</option>
                <option value="second">Autor</option>
                <option value="third">Text</option>
                <option value="fourth">Subjects</option>
            </select>
            <input 
                type="text" 
                placeholder="Search"
                class="header__wrapper--input">
            <button class="header__wrapper--search">
                <img src="${search}" alt="search">
            </button>
            <button class="header__wrapper--qr">
                <img src="${qr}" alt="qr">
            </button>
        </div>
        <div class="header__profile">
            <img src="${me}" alt="me" class="header__profile--image">
            <span class="header__profile--name">
                Cẩm Hoa
            </span>
            <button class="header__profile--button">
                <img src="${poly}" alt="">
            </button>
            <div class="header__profile--option hidden">
                <ul>
                    ${ACCOUNT.map(
                      (option) => `
                    <li><a href="#">${option}</a></li>
                    `,
                    ).join('')}
                </ul>
            </div>
        </div>
    </header>
    `;
};

export default Header;
