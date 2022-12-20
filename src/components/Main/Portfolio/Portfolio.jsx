function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__heading">Портфолио</h3>
        <ul className="portfolio__list">
          <li>
            <a
              className="portfolio__link"
              href="https://github.com/Tanya1231/how-to-learn"
              target="blank"
            >
              Статичный сайт
            </a>
          </li>
          <li>
            <a
              className="portfolio__link"
              href="https://github.com/Tanya1231/russian-travel"
              target="blank"
            >
              Адаптивный сайт
            </a>
          </li>
          <li>
            <a
              className="portfolio__link"
              href="https://github.com/Tanya1231/react-mesto-api-full"
              target="blank"
            >
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
