import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import Preloader from "../../Preloader/Preloader";

function SavedMovies({
  savedMovies,
  onDelete,
  savedMoviesIds,
  isLoading,
  handleCheckboxOnLoad,
}) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortFilteredMovies, setShortFilteredMovies] = useState([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  useEffect(() => {
    setFilteredMovies([...savedMovies]);
  }, [savedMovies]);

  const handleDeleteMovie = movie => {
    onDelete(movie);
  };

  const filterMovies = (arr, str) => {
    const filtedMovies = arr.filter(item => {
      const nameRuToLowerCase = item.nameRU.toLowerCase();
      return nameRuToLowerCase.includes(str.toLowerCase());
    });
    return filtedMovies;
  };

  const handleSearch = message => {
    const result = filterMovies(savedMovies, message);
    setFilteredMovies(result);
    const resultShort = result.filter(item => item.duration <= 40);
    setShortFilteredMovies(resultShort);
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  return (
    <section className="movies-saved">
      <div className="movies-saved__container">
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
                {shortFilteredMovies.length === 0 && (
                  <span className="movies__nothing-found">
                    Ничего не найдено
                  </span>
                )}
              </>
            ) : (
              <>
                {filteredMovies.length === 0 && (
                  <span className="movies__nothing-found">
                    Ничего не найдено
                  </span>
                )}
              </>
            )}
            <MoviesCardList>
              {isCheckboxChecked ? (
                <>
                  {shortFilteredMovies.map(item => (
                    <MoviesCard
                      card={item}
                      {...item}
                      key={item._id}
                      handleDeleteMovie={handleDeleteMovie}
                      savedMoviesIds={savedMoviesIds}
                      savedMovies={savedMovies}
                    />
                  ))}
                </>
              ) : (
                <>
                  {filteredMovies.map(item => (
                    <MoviesCard
                      card={item}
                      {...item}
                      key={item._id}
                      handleDeleteMovie={handleDeleteMovie}
                      savedMoviesIds={savedMoviesIds}
                      savedMovies={savedMovies}
                    />
                  ))}
                </>
              )}
            </MoviesCardList>
          </>
        )}
      </div>
    </section>
  );
}

export default SavedMovies;
