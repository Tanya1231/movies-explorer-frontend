import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import "../../index.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  const [currentWidth] = useState(window.innerWidth);

  const location = useLocation();

  return (
    <div className="page">
      {["/", "/movies", "/saved-movies", "/profile"].includes(
        location.pathname
      ) ? (
        <Header location={location} currentWidth={currentWidth} />
      ) : null}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/movies" element={<Movies location={location} />}></Route>
        <Route
          path="/saved-movies"
          element={<SavedMovies location={location} />}
        ></Route>
        <Route
          path="/profile"
          element={<Profile name="Татьяна" email="tanjaabdulova@yandex.ru" />}
        ></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      {["/", "/movies", "/saved-movies"].includes(location.pathname) ? (
        <Footer />
      ) : null}
    </div>
  );
}

export default App;
