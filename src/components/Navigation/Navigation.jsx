import { Link } from "react-router-dom";
import React from "react";

const Navigation = ({ location }) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      {location.pathname === "/" ? null : (
        <div>
          <section
            className={`navigation__menu-container ${
              openMenu ? "navigation__menu-container_open" : ""
            }`}
          >
            <div className="navigation__container">
              <button
                className="navigation__close"
                onClick={handleToggleMenu}
              />
              <nav className="navigation">
                <div className="navigation__position">
                  <Link
                    to="/"
                    className="navigation__menu navigation__menu-right navigation__menu-right-show"
                  >
                    Главная
                  </Link>
                  <div className="navigation__movies">
                    <Link
                      to="/movies"
                      className="navigation__menu navigation__menu-right"
                    >
                      Фильмы
                    </Link>
                    <Link
                      to="/saved-movies"
                      className="navigation__menu navigation__menu-right navigation__menu-font-weight"
                    >
                      Сохранённые фильмы
                    </Link>
                  </div>
                  <Link
                    to="/profile"
                    className="navigation__account navigation__menu-right"
                  >
                    Аккаунт
                    <div className="navigation__account-back" />
                  </Link>
                </div>
              </nav>
            </div>
          </section>
          <button
            className="navigation__menu-burger"
            type="button"
            onClick={handleToggleMenu}
          />
        </div>
      )}
    </>
  );
};

export default Navigation;
