import {search, qr, me } from "../../resources/assets/image"

const Header = () =>  {
    return `
    <header class="header">
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
                <img src="${qr}" alt="">
            </button>
        </div>
        <div class="header__profile">
            <img src="${me}" alt="me" class="header__profile--image">
            <span class="header__profile--name">
                Cẩm Hoa
            </span>
            <select class="header__profile--option">
                <option value="first">Profile</option>
                <option value="second">Favourite</option>
                <option value="third">Payments</option>
                <option value="fourth">Logout</option>
            </select>
        </div>
    </header>
    `;
};

export default Header;