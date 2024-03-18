import { poly } from "../../resources/assets/image";

const Button= () => {
    return `
    <section class="browser">
        <div class="browser__wrapper">
            <label for="">Browse</label>
            <button class="browser__wrapper-arrow">
                <img src="${poly}" alt="poly">
            </button>
            <div class="browser__wrapper-option">
                <ul>
                    <li><a href="#">Engineering</a></li>
                    <li><a href="#">Medical</a></li>
                    <li><a href="#">Arts & Science</a></li>
                    <li><a href="#">Architecture</a></li>
                    <li><a href="#">Law</a></li>
                </ul>
            </div>
        </div>
        <button class="browser-create">
            New
        </button>
    </section>
    `
}

export default Button;
