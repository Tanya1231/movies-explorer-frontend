import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ loggedIn }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      {loggedIn && (
        <div>
          <section
            className={`navigation-menu-container ${
              openMenu ? "navigation__menu-container_open" : ""
            }`}
          >
            <div className="navigation-container">
              <button className="navigation-close" onClick={handleToggleMenu} />
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
            className="navigation-menu-burger"
            type="button"
            onClick={handleToggleMenu}
          />
        </div>
      )}
    </>
  );
};

export default Navigation;
