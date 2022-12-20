import React from "react";

const Profile = ({ name, email }) => {
  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__heading">Привет, {name}!</h2>
        <div className="profile__info">
          <div className="profile__info-container">
            <label htmlFor="name">Имя</label>
            <input
              id="name"
              type="text"
              className="profile__input"
              value={name}
              readOnly
              minLength="2"
              maxLength="30"
            ></input>
          </div>
          <div className="profile__info-container">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              className="profile__input"
              value={email}
              readOnly
            ></input>
          </div>
        </div>
        <div className="profile__buttons">
          <button className="profile__button">Редактировать</button>
          <button className="profile__button">Выйти из аккаунта</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
