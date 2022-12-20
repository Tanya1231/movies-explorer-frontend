function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__container">
        <h4 className="techs__heading">Технологии</h4>
        <div className="techs__info">
          <h3>7 технологий</h3>
          <p className="techs__copiright">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="techs__list">
          <li className="techs__technology">HTML</li>
          <li className="techs__technology">CSS</li>
          <li className="techs__technology">JS</li>
          <li className="techs__technology">React</li>
          <li className="techs__technology">Git</li>
          <li className="techs__technology">Express.js</li>
          <li className="techs__technology">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
