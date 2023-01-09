import { Link, useLocation } from "react-router-dom";
import logo from "../../images/header__logo.svg";

const Form = ({
  onSubmit,
  isValid,
  titleText,
  buttonText,
  children,
  spanText,
  linkTo,
  linkText,
}) => {
  const location = useLocation();
  return (
    <div className="form-auth">
      <Link to="/">
        <img
          src={logo}
          className="header-logo header-logo-auth"
          alt="логотип"
        />
      </Link>
      <form className="form" onSubmit={onSubmit}>
        <h2 className="form__title">{titleText}</h2>
        <div className="form__input-container">{children}</div>
        <button
          type="submit"
          disabled={!isValid}
          className={`form__button ${
            location.pathname === "/signin" && "form__button_type_login"
          } ${!isValid && "form__button_disabled"}`}
        >
          {buttonText}
        </button>
      </form>
      <div className="form form-auth__span">
        <span className="form__sign">
          {spanText}
          <Link className="form__link" to={linkTo}>
            {linkText}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Form;
