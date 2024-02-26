import { logo,off } from "../../resources/assets/image";

const Register = () => {
return `
<div class="registration">
    <div class="wrapper">
        <figure class= "wrapper__top">
            <img src="${logo}" alt="" class="wrapper__top-logo">
            <figcaption>
            <span class="wrapper__top-primary">
                Registration
            </span>
            <br>
            <span class="wrapper__top-secondary">
                For Both Staff & Students
            </span>
        </figcaption>
    </figure>
    <form class="wrapper__form" method="post">
    <div class="wrapper__form__box">
    <label for="reg">Reg No.</label>
    <input
        type="reg"
        placeholder="Your Reg. No."
        class="wrapper__form__box-input"
        id="reg"
    />
    <p class="error"></p>
    </div>
    <div class="wrapper__form__box">
        <label for="email">College Email ID</label>
        <input
            type="email"
            placeholder="Your email"
            class="wrapper__form__box-input"
            id="email"
        />
        <p class="error"></p>
    </div>
    <div class="wrapper__form__box">
        <label for="password">Password</label>
        <div class = "passwordfield">
        <input
            type="password"
            placeholder="Your password"
            class="wrapper__form__box-input"
            id="password"
        />
        <figure>
        <img src="${off}">
        </figure>
        </div>
        <p class="error"></p>
    </div>
    <div class="wrapper__form__box">
        <label for="confirm">Confirm Password</label>
        <div class = "passwordfield">
        <input
            type="password"
            placeholder="Confirm Password"
            class="wrapper__form__box-input"
            id="confirm"
        />
        <figure>
        <img src="${off}">
        </figure>
        </div>
        <p class="error"></p>
    </div>
    <button class="wrapper__form-reg">Register</button>
    </form>

    <div class="wrapper__form__bottom">
        <span class="wrapper__form__bottom--text">
            Already a User? 
            <a class="wrapper__form__bottom--text-link">Login now</a>
        </span>
        <span class="wrapper__form__bottom--text">
            Use as Guest 
        </span>
    </div>
</div>
`;
};

export default Register;