import logo from "../../images/header__logo.svg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HeaderEntry from "./HeaderEntry/HeaderEntry";

const Header = ({ location, currentWidth }) => {
  return (
    <header
      className={`header ${location.pathname !== "/" ? "header_color" : ""}`}
    >
      <div className="header__container">
        {currentWidth > 2500 ? (
          <>
            <Link to="/">
              <img src={logo} className="header-logo" alt="логотип" />
            </Link>
            <HeaderEntry location={location} currentWidth={currentWidth} />
          </>
        ) : (
          <>
            <Link to="/">
              <img src={logo} className="header-logo" alt="логотип" />
            </Link>
            <HeaderEntry location={location} currentWidth={currentWidth} />
            <Navigation location={location} currentWidth={currentWidth} />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
