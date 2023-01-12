import { useContext, useEffect } from "react";
import { useFormWithValidation } from "../useFormWithValidation/useFormWithValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useState } from "react";

const Profile = ({ loggedIn, onExit, onEditProfile, isSuccess }) => {
  const { name, email } = useContext(CurrentUserContext);
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({ name, email });

  const currentUser = useContext(CurrentUserContext);

  const [isInfoChanged, setIsInfoChanged] = useState(false);

  const [readOnly, setReadOnly] = useState(true);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    currentUser.name !== values.name || currentUser.email !== values.email
      ? setIsInfoChanged(true)
      : setIsInfoChanged(false);
  }, [currentUser.name, currentUser.email, values.email, values.name]);

  useEffect(() => {
    resetForm({ name: currentUser.name, email: currentUser.email }, {}, false);
  }, [resetForm, currentUser]);

  const handleUpdateButtonClick = e => {
    e.preventDefault();
    setReadOnly(false);
  };

  const handleUpdateUserInfoSubmit = e => {
    e.preventDefault();
    const { email, name } = values;
    onEditProfile({ email, name });
    setSuccess("Ваш профиль успешно обновлен");
    setError("Произошла ошибка, пропробуйте ещё раз");
  };

  useEffect(() => {
    setSuccess("");
    setError("");
  }, []);

  const exit = () => {
    loggedIn && onExit();
  };

  return (
    <>
      <section className="profile">
        <form
          className="profile__container"
          onSubmit={handleUpdateUserInfoSubmit}
        >
          <h2 className="profile__heading">{`Привет, ${name}`}!</h2>
          <div className="profile__info">
            <div className="profile__info-container">
              <label htmlFor="name">Имя</label>
              <input
                id="name"
                type="text"
                name="name"
                value={values.name || ""}
                onChange={handleChange}
                readOnly={readOnly}
                required
                minLength="2"
                maxLength="30"
              ></input>
            </div>
            <span className="form__error">{errors.name}</span>
            <div className="profile__info-container">
              <label htmlFor="email">E-mail</label>
              <input
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                id="email"
                type="email"
                name="email"
                value={values.email || ""}
                onChange={handleChange}
                readOnly={readOnly}
                required
              ></input>
            </div>
            <span className="form__error">{errors.email}</span>
          </div>
          <div className="profile__buttons">
            {isSuccess ? (
              <span className="profile__error">{success}</span>
            ) : null}
            {!isSuccess ? (
              <span className="profile__error">{error}</span>
            ) : null}
            {isValid && isInfoChanged ? (
              <button className="profile__button" type="submit">
                Сохранить
              </button>
            ) : (
              <>
                <button
                  className="profile__button"
                  onClick={handleUpdateButtonClick}
                >
                  Редактировать
                </button>
                <button className="profile__button" onClick={exit}>
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </>
  );
};

export default Profile;
