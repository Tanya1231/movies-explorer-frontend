function NavTab() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <ul className="nav__list">
          <li>
            <a className="nav__link" href="#about-project">
              О проекте
            </a>
          </li>
          <li>
            <a className="nav__link" href="#techs">
              Технологии
            </a>
          </li>
          <li>
            <a className="nav__link" href="#about-me">
              Студент
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTab;
