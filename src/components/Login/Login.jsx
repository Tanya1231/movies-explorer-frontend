import Form from "../Form/Form";
import { useFormWithValidation } from "../useFormWithValidation/useFormWithValidation";

const Login = ({ onLogin }) => {
  const { values, errors, isValid, handleChange } = useFormWithValidation({
    email: "",
    password: "",
  });

  const onSubmit = e => {
    e.preventDefault();
    const { email, password } = values;
    onLogin(email, password);
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        isValid={isValid}
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
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          type="email"
          id="email"
          name="email"
          className="form__input form__input_type_email"
          autoComplete="off"
          minLength="2"
          value={values.email}
          onChange={handleChange}
        />
        <span className="form__error">{errors.email}</span>
        <label htmlFor="password" className="form__label">
          Пароль
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="form__input form__input_type_password"
          value={values.password}
          onChange={handleChange}
          required
        />
        <span className="form__error">{errors.password}</span>
      </Form>
    </>
  );
};

export default Login;
