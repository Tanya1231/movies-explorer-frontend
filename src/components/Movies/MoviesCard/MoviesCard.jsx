import card from "../../../images/moviescard.jpg";

function MoviesCard({ location }) {
  return (
    <article className="movies-card">
      <div className="movies__card">
        <img className="movies__card-image" alt="картинка" src={card} />
      </div>
      <div className="movies__card-info">
        <div>
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <p className="movies-card__duration">1ч 47мин</p>
        </div>
        {location.pathname === "/movies" ? (
          <button className="movies-card__like movies-card__like_active"></button>
        ) : (
          <button className="movies-card__delete"></button>
        )}
      </div>
    </article>
  );
}

export default MoviesCard;
