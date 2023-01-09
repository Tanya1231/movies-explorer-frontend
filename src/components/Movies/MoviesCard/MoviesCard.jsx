import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function MoviesCard({
  card,
  handleMovieCardLike,
  handleDeleteMovie,
  onDelete,
  savedMovies,
}) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);
  const [likedMovies, setLikedMovies] = useState([]);

  const handleLike = () => {
    setIsLiked(true);
    setLikedMovies([card.id, ...likedMovies]);
    handleMovieCardLike(card);
  };

  const handleDislike = () => {
    setIsLiked(false);
    onDelete(card);
  };

  useEffect(() => {
    setIsLiked(savedMovies?.some(item => item.movieId === card.id));
  }, [card.id, savedMovies]);

  const deleteMovie = () => {
    handleDeleteMovie(card);
  };

  const url = "https://api.nomoreparties.co";

  const movieDuration = min => {
    return `${Math.floor(min / 60)}ч ${min % 60}min`;
  };

  return (
    <article className="movies-card">
      <div className="movies__card">
        <a href={card.trailerLink} target="blank">
          <img
            className="movies__card-image"
            alt={card.nameRU}
            src={
              location.pathname === "/movies"
                ? url + card.image.url
                : card.image
            }
          />
        </a>
      </div>
      <div className="movies__card-info">
        <div>
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <p className="movies-card__duration">
            {movieDuration(card.duration)}
          </p>
        </div>
        {location.pathname === "/movies" ? (
          <button
            className={`movies-card__like ${
              isLiked && "movies-card__like_active"
            }`}
            onClick={isLiked ? handleDislike : handleLike}
          ></button>
        ) : (
          <button
            className="movies-card__delete"
            onClick={deleteMovie}
          ></button>
        )}
      </div>
    </article>
  );
}

export default MoviesCard;
