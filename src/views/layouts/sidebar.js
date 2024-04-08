import { logo, book, sp, home } from "../../resources/assets/image";

const SideBar = () => {
    return `
    <section class="sidebar">
    <figure class="sidebar-logo">
        <img src="${logo}" alt="logo">
    </figure>
    <div class="sidebar__menu">
        <ul class="sidebar__menu--item">
            <li>
                <img src="${home}" alt="home">
                <a class="sidebar__menu--item-primary" href="/home">
                    <span>Home</span>
                </a>
            </li>
            <li>
                <img src="${sp}" alt="mana">
                <a class="sidebar__menu--item-text" href="/management">
                    <span>Management</span>
                </a>
            </li>
            <li>
                <img src="${book}" alt="books">
                <a class="sidebar__menu--item-text" href="#">
                    <span>My Shelf</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="sidebar__final">
        <ul>        
            <li>
                <a class="sidebar__final-text" href="#">About</a>
            </li>
            <li>
                <a class="sidebar__final-text" href="#">Support</a>
            </li>
            <li>
                <a class="sidebar__final-text" href="#">Terms & Condition</a>
            </li>
        </ul>
    </div>
</section>
    `;
};

export default SideBar;
