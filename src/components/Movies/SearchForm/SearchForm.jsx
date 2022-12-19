import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <section className="search">
      <form className="search__container">
        <div className="search__input-container">
          <input
            type="text"
            id="search"
            className="search__input"
            placeholder="Фильм"
            required
            minLength="2"
          ></input>
          <div className="search__go">
            <button type="submit" className="search__button"></button>
            <div className="search__checkbox-container">
              <FilterCheckbox />
              <p className="search__checkbox-copiright">Короткометражки</p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
