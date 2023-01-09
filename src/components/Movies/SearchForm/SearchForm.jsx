import { useState } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({ isCheckboxChecked, onCheckboxChange, onSearch }) => {
  const location = useLocation();
  const [error, setError] = useState("");
  const [searchMessage, setSearchMessage] = useState(
    location.pathname === "/movies"
      ? localStorage.getItem("searchMessage") || ""
      : ""
  );

  const handleChange = event => {
    setError("");
    setSearchMessage(event.target.value);
  };

  const handleCheckboxChange = () => {
    onCheckboxChange();
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchMessage === "") {
      setError("Необходимо ввести ключевое слово");
    } else {
      onSearch(searchMessage);
      setError("");
    }
    location.pathname === "/movies" &&
      localStorage.setItem("searchMessage", searchMessage);
  };

  return (
    <section className="search">
      <form className="search__container" onSubmit={handleSubmit}>
        <div className="search__input-container">
          <input
            type="text"
            value={searchMessage || ""}
            onChange={handleChange}
            className="search__input"
            placeholder="Фильм"
            autoComplete="off"
          ></input>
          <div className="search__go">
            <button type="submit" className="search__button"></button>
            <div className="search__checkbox-container">
              <FilterCheckbox
                isChecked={isCheckboxChecked}
                onCheckboxChange={handleCheckboxChange}
              />
              <p className="search__checkbox-copiright">Короткометражки</p>
            </div>
          </div>
        </div>
        <span className="form__error">{error}</span>
      </form>
    </section>
  );
};

export default SearchForm;
