import { Link } from "react-router-dom";

const HeaderEntry = ({ location }) => {
  return (
    <>
      {location.pathname === "/" && (
        <section className="header__entry">
          <Link to="/signup" className="header__button header__button_register">
            Регистрация
          </Link>
          <Link to="/signin">
            <button className="header__button header__button_enter">
              Войти
            </button>
          </Link>
        </section>
      )}
    </>
  );
};

export default HeaderEntry;
