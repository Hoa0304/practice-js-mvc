import { logo } from "../../resources/assets/image";

const Login = () => {
return `
<div class="login">
  <div class="wrapper">
    <figure class= "wrapper__top">
    <img src="${logo}" alt="" class="wrapper__top-logo">
    <figcaption>
      <span class="wrapper__top-primary">
        Welcome Back !
      </span>
      <br>
      <span class="wrapper__top-secondary">
        Sign in to continue to yourDigital Library
      </span>
    </figcaption>
    </figure>
    <form id="wrapper__form" method="post">
    <div class="wrapper__form__box">
    <label for="email">Email</label>
    <input
        type="email"
        placeholder="Your email"
        class="wrapper__form__box-input"
        id="email"
    />
    <p class="error"></p>
    </div>
    <div class="wrapper__form__box">
        <label for="password">Password:</label>
        <input
            type="password"
            placeholder="Your password"
            class="wrapper__form__box-input"
            id="password"
        />
        <p class="error"></p>
    </div>
    <div class="wrapper__form__question">
      <input type="checkbox" name="remember" id="remember">
      <label for="remember">Remember me</label>
      <a class="wrapper__form__question-pass">Forgot password?</a>
    </div>
    <button class="wrapper__form-log">Log in</button>
    </form>
    <div class="wrapper__form__bottom">
      <span class="wrapper__form__bottom--text">
          New User?
          <a class="wrapper__form__bottom--text-link">Register Here</a>
      </span>
      <span class="wrapper__form__bottom--text">
          Use as Guest 
      </span>
    </div>
  </div>
</div>
`;
};

export default Login;