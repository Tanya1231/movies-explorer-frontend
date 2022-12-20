import me from "../../../images/AboutMe.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <h4 className="about-me__heading">Студент</h4>
        <div className="about-me__info">
          <img className="about-me__photo" src={me} alt="Фото"></img>
          <h3 className="about-me__name">Татьяна</h3>
          <p className="about-me__copiright">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__about">
            Я с детства очень увлекалась компьютерами всегда было чем-то
            невероятно интересным для меня. Мне нравиться создавать что-то
            новое. Именно поэтому я выбрала эту специальность. Я также считаю
            эту профессию очень перспективной. Хочу развиваться в разработке и
            приносить пользу команде. Люблю учиться и узнавать о новых
            технологиях и возможностях. Сейчас я заканчиваю курсы в
            Яндекс.Практикуме, так же читаю дополнительную информацию и прохожу
            тренажеры. Люблю путешествовать и активный отдых.
          </p>
          <p className="about-me__link">
            <a href="https://github.com/Tanya1231" target="blank">
              Github
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
