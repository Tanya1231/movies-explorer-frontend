import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

function Movies({
  movies,
  onSearch,
  numberCardsToRender,
  numberCardsToAdd,
  onSave,
  savedMoviesIds,
  onDelete,
  isLoading,
  savedMovies,
}) {
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem("filteredMovies")) || []
  );
  const [shortFilteredMovies, setShortFilteredMovies] = useState(
    JSON.parse(localStorage.getItem("shortFilteredMovies")) || []
  );
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(
    JSON.parse(localStorage.getItem("checkboxStatus")) || false
  );
  const [cardsToRender, setCardsToRender] = useState(numberCardsToRender);
  const [isSeachHandled, setIsSearchHandled] = useState(false);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
    setIsSearchHandled(true);
  };

  useEffect(() => {
    if (localStorage.getItem("filteredMovies")) {
      const filteredMovies = JSON.parse(localStorage.getItem("filteredMovies"));
      setShortFilteredMovies(
        filteredMovies.filter(item => item.duration <= 40)
      );
    }
  }, []);

  const filterMovies = (arr, str) => {
    const filtedMovies = arr.filter(item => {
      const nameRuToLowerCase = item.nameRU.toLowerCase();
      return nameRuToLowerCase.includes(str.toLowerCase());
    });
    return filtedMovies;
  };

  const handleCheckboxOnLoad = message => {
    filterMovies(movies, message);
  };

  const handleSearch = message => {
    setCardsToRender(numberCardsToRender);
    onSearch(movies => {
      const result = filterMovies(movies, message);
      setFilteredMovies(result);
      const resultShort = result.filter(item => item.duration <= 40);
      setShortFilteredMovies(resultShort);
      if (isCheckboxChecked) {
        localStorage.setItem(
          "shortFilteredMovies",
          JSON.stringify(resultShort)
        );
        localStorage.removeItem("filteredMovies");
      } else {
        localStorage.setItem("filteredMovies", JSON.stringify(result));
        localStorage.removeItem("shortFilteredMovies");
      }
      localStorage.setItem("checkboxStatus", JSON.stringify(isCheckboxChecked));
    });
    setIsSearchHandled(true);
  };

  const handleButtonMoreClick = () => {
    setCardsToRender(cardsToRender + numberCardsToAdd);
  };

  const handleMovieCardLike = card => {
    onSave(card);
  };

  return (
    <>
      <section className="movies">
        <div className="movies__container">
          <SearchForm
            isCheckboxChecked={isCheckboxChecked}
            onCheckboxChange={handleCheckboxChange}
            onSearch={handleSearch}
            handleCheckboxOnLoad={handleCheckboxOnLoad}
          />
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              {isCheckboxChecked ? (
                <>
                  {isSeachHandled && shortFilteredMovies.length === 0 && (
                    <span className="movies__nothing-found">
                      Ничего не найдено
                    </span>
                  )}
                </>
              ) : (
                <>
                  {isSeachHandled && filteredMovies.length === 0 && (
                    <span className="movies__nothing-found">
                      Ничего не найдено
                    </span>
                  )}
                </>
              )}
              <MoviesCardList>
                {isCheckboxChecked ? (
                  <>
                    {shortFilteredMovies.slice(0, cardsToRender).map(item => (
                      <MoviesCard
                        card={item}
                        {...item}
                        key={item.id}
                        handleMovieCardLike={handleMovieCardLike}
                        savedMoviesIds={savedMoviesIds}
                        savedMovies={savedMovies}
                        onDelete={onDelete}
                      />
                    ))}
                  </>
                ) : (
                  <>
                    {filteredMovies.slice(0, cardsToRender).map(item => (
                      <MoviesCard
                        card={item}
                        {...item}
                        key={item.id}
                        handleMovieCardLike={handleMovieCardLike}
                        savedMoviesIds={savedMoviesIds}
                        savedMovies={savedMovies}
                        onDelete={onDelete}
                      />
                    ))}
                  </>
                )}
              </MoviesCardList>
              {isCheckboxChecked ? (
                <>
                  {shortFilteredMovies.length >
                    shortFilteredMovies.slice(0, numberCardsToRender).length &&
                  shortFilteredMovies.length >= cardsToRender ? (
                    <div className="more-container">
                      <button
                        className="more-button"
                        onClick={handleButtonMoreClick}
                      >
                        Ещё
                      </button>
                    </div>
                  ) : null}
                </>
              ) : (
                <>
                  {filteredMovies.length >
                    filteredMovies.slice(0, numberCardsToRender).length &&
                  filteredMovies.length >= cardsToRender ? (
                    <div className="more-container">
                      <button
                        className="more-button"
                        onClick={handleButtonMoreClick}
                      >
                        Ещё
                      </button>
                    </div>
                  ) : null}
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Movies;
