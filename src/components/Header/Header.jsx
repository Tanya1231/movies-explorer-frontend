import logo from "../../images/header__logo.svg";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HeaderEntry from "./HeaderEntry/HeaderEntry";

const Header = ({ loggedIn }) => {
  const location = useLocation();
  return (
    <header
      className={`header ${location.pathname !== "/" ? "header_color" : ""}`}
    >
      <div className="header__container">
        <Link to="/">
          <img src={logo} className="header-logo" alt="логотип" />
        </Link>
        <HeaderEntry loggedIn={loggedIn} />
        <Navigation loggedIn={loggedIn} />
      </div>
    </header>
  );
};

export default Header;
