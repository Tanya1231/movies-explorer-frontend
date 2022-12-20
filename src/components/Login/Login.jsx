import Form from "../Form/Form";

const Login = () => {
  return (
    <Form
      titleText="Рады видеть!"
      buttonText="Войти"
      spanText="Еще не зарегестрированы?"
      linkText="Регистрация"
      linkTo="/signup"
    >
      <label htmlFor="email" className="form__label">
        E-mail
      </label>
      <input
        type="email"
        id="email"
        className="form__input form__input_type_email"
        required
      />
      <label htmlFor="password" className="form__label">
        Пароль
      </label>
      <input
        type="password"
        id="password"
        className="form__input form__input_type_password"
        required
        minLength="2"
        maxLength="30"
      />
    </Form>
  );
};

export default Login;
