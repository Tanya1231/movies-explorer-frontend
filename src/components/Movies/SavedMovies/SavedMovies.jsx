import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies ({ location })  {
  return (
    <section className="movies-saved">
      <div className="movies-saved__container">
        <SearchForm />
        <MoviesCardList location={location}>
          <MoviesCard location={location} />
        </MoviesCardList>
      </div>
    </section>
  );
};

export default SavedMovies;
