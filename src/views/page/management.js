import SideBar from "../layouts/sidebar";
import Header from "../layouts/header";
import Button from "../modules/button";
import Table from "../components/table";
import Form from "../components/form";
import EditForm from "../components/editForm";

const Mana = () => {
    return `
    <div class="mana">
        <div class="mana__form hidden" >
            ${Form()}
        </div>
        <div class="mana__editForm hidden" >
        </div>
        <div class="mana__sidebar">
            ${SideBar()}
        </div>
        <div class="mana__main">
            <div class="mana__main-header">
                ${Header()}
            </div>
            <div class="mana__main-body">
            ${Button()}
            ${Table()}
            </div>
        </div>
    </div>
    `;
}

export default Mana;
