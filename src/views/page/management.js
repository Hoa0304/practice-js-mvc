import SideBar from "../layouts/sidebar";
import Header from "../layouts/header";
import Button from "../modules/button";

const Mana = () => {
    return `
    <div class="mana">
        <div class="mana__sidebar">
            ${SideBar()}
        </div>
        <div class="mana__main">
            <div class="mana__main-header">
                ${Header()}
            </div>
            <div class="mana__main-body">
            ${Button()}
            </div>
        </div>
    </div>
    `;
}

export default Mana;
