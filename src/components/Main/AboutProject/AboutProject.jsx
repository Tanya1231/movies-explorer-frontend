function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__container">
        <h2 className="about-project__heading">О проекте</h2>
        <div className="about-project__info">
          <div className="about-project__stage">
            <h3 className="about-project__content">
              Дипломный проект включал 5 этапов
            </h3>
            <p>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__info-block">
            <h3 className="about-project__content">
              На выполнение диплома ушло 5 недель
            </h3>
            <p>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__week-container">
          <div className="about-project__backend-week">
            <span>1 неделя</span>
          </div>
          <div className="about-project__frontend-week">
            <span>4 недели</span>
          </div>
          <span className="about-project__backend">Back-end</span>
          <span className="about-project__frontend">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
