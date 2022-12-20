import Form from "../Form/Form";

const Register = () => {
  return (
    <Form
      titleText="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      spanText="Уже зарегестрированы?"
      linkText="Войти"
      linkTo="/signin"
    >
      <label htmlFor="name" className="form__label">
        Имя
      </label>
      <input
        type="text"
        id="name"
        className="form__input form__input_type_name"
        minLength="2"
        maxLength="30"
        required
      />
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

export default Register;
