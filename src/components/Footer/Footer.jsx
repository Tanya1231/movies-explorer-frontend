function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h4 className="footer__copyr">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h4>
        <div>
          <div className="footer__container-nav">
            <p className="footer__copyright">&copy; 2022</p>
            <ul className="footer__container-list">
              <li>
                <a href="https://practicum.yandex.ru" target="blank">
                  Яндекс.Практикум
                </a>
              </li>
              <li>
                <a href="https://github.com/Tanya1231" target="blank">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
