const FilterCheckbox = ({ isChecked, onCheckboxChange }) => {
  const handleChange = () => {
    onCheckboxChange();
  };

  return (
    <label className="filter-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="filter-checkbox__input"
      ></input>
      <span className="filter-checkbox__slider"></span>
    </label>
  );
};

export default FilterCheckbox;
