import Form from "../Form/Form";
import { useFormWithValidation } from "../useFormWithValidation/useFormWithValidation";

const Register = ({ onRegister }) => {
  const { values, errors, isValid, handleChange } = useFormWithValidation({
    email: "",
    name: "",
    password: "",
  });

  const onSubmit = e => {
    e.preventDefault();
    const { name, email, password } = values;
    onRegister(name, email, password);
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        isValid={isValid}
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
          name="name"
          className="form__input form__input_type_name"
          minLength="2"
          maxLength="30"
          required
          value={values.name || ""}
          onChange={handleChange}
        />
        <span className="form__error">{errors.name}</span>
        <label htmlFor="email" className="form__label">
          E-mail
        </label>
        <input
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          type="email"
          id="email"
          name="email"
          className="form__input form__input_type_email"
          required
          value={values.email || ""}
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
          required
          minLength="2"
          maxLength="30"
          value={values.password || ""}
          onChange={handleChange}
        />
        <span className="form__error">{errors.password}</span>
      </Form>
    </>
  );
};

export default Register;
