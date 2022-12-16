import { Link } from "react-router-dom";
import logo from "../../images/header__logo.svg";

const Form = ({ titleText, buttonText, children, spanText, linkTo, linkText }) => {
  return (
    <div className="form-auth">
    <Link to='/'><img src={logo} className="header__logo" alt="логотип" /></Link>
      <form className="form">
        <h2 className="form__title">{titleText}</h2>
        <div className="form__input-container">
            {children}
        </div>
        <button className='form__button'>
        {buttonText}
        </button>
      </form>
      <div className="form__span">
      <span className="form__sign">{spanText}<Link className="form__link" to={linkTo}>{linkText}</Link></span>
      </div>
    </div>
  );
};

export default Form;
