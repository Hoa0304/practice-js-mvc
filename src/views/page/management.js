import SideBar from "../layouts/sidebar";
import Header from "../layouts/header";
import Button from "../modules/button";
<<<<<<< HEAD
=======
import Table from "../components/table";
import Form from "../components/form";
import EditForm from "../components/editForm";
>>>>>>> ec906f5 (update (#33))

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
            </div>
        </div>
    </div>
    `;
}

export default Mana;
