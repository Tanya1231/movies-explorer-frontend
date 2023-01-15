import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import "../../index.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as MainApi from "../../utils/MainApi";
import * as MoviesApi from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Preloader from "../Preloader/Preloader";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesIds, setSavedMoviesIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [isUserChecked, setIsUserChecked] = useState(false);
  const [numberCardsToRender, setNumberCardsToRender] = useState(0);
  const [numberCardsToAdd, setNumberCardsToAdd] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    MainApi.checkToken()
      .then(res => {
        if (res) {
          setIsLoggedIn(true);
          setIsUserChecked(true);
        }
      })
      .catch(err => {
        console.log(err);
        setIsUserChecked(true);
        setIsLoggedIn(false);
      });
  }, []);

  useEffect(() => {
    if (isloggedIn) {
      Promise.all([MainApi.getUserInfo(), MainApi.getMovies()])
        .then(([user, movies]) => {
          setCurrentUser(user);
          setSavedMovies(movies.filter(item => item.owner === user._id));
          setSavedMoviesIds(
            movies
              .filter(item => item.owner === user._id)
              .map(item => item.movieId)
          );
        })
        .catch(err => console.log(err));
    }
    return;
  }, [isloggedIn]);

  const getMovies = async filter => {
    setIsLoading(true);
    try {
      try {
        const res = await MoviesApi.getMovies();
        setMovies(res);
        filter(res);
      } catch (err) {
        console.log(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  function handleSearch(filter) {
    getMovies(filter);
  }

  const resizeCallback = () => {
    setTimeout(() => {
      setCurrentWidth(window.innerWidth);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeCallback);
    return () => {
      window.removeEventListener("resize", resizeCallback);
    };
  }, []);

  useMemo(() => {
    let res;
    let add;
    switch (true) {
      case currentWidth >= 1280:
        res = 12;
        add = 3;
        break;
      case currentWidth >= 768:
        res = 8;
        add = 2;
        break;
      case currentWidth >= 320:
        res = 5;
        add = 2;
        break;
      default:
        res = 6;
        add = 3;
        break;
    }
    setNumberCardsToRender(res);
    setNumberCardsToAdd(add);
  }, [currentWidth]);

  const handleSaveMovie = async movie => {
    try {
      const newMovie = await MainApi.saveMovie(movie);
      setSavedMovies([newMovie, ...savedMovies]);
      setSavedMoviesIds([newMovie.movieId, ...savedMoviesIds]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteMovie = movie => {
    let id;
    if (!movie._id) {
      const deleteMovie = savedMovies.find(item => {
        return item.movieId === movie.id;
      });
      id = deleteMovie._id;
    } else {
      id = movie._id;
    }
    MainApi.deleteMovie(id)
      .then(res => {
        setSavedMovies(savedMovies.filter(item => item._id !== id));
      })
      .catch(err => {
        console.log(err);
      });
  };

  function handleRegisterSubmit(name, email, password) {
    MainApi.register(name, email, password)
      .then(res => {
        handleLoginSubmit(email, password);
        setIsSuccess(true);
        setIsInfoTooltipPopupOpen(true);
        navigate("/signin");
      })
      .catch(err => {
        setIsSuccess(false);
        setIsInfoTooltipPopupOpen(true);
        console.log(`Ошибка регистрации ${err}`);
      });
  }

  function handleLoginSubmit(email, password) {
    MainApi.authorize(email, password)
      .then(res => {
        setIsLoggedIn(true);
        navigate("/movies");
      })
      .catch(err => {
        console.log(err);
        setIsLoggedIn(false);
        setIsSuccess(false);
        setIsInfoTooltipPopupOpen(true);
      });
  }

  const handleSignOut = () => {
    MainApi.logoff()
      .then(() => {
        setCurrentUser({});
        setIsLoggedIn(false);
        navigate("/");
        localStorage.clear();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleUpdateUserInfo = user => {
    MainApi.editUserData(user)
      .then(data => {
        setCurrentUser(data);
        setIsSuccess(true);
      })
      .catch(err => {
        console.log(err);
        setIsSuccess(false);
      });
  };

  const closeAllPopups = () => {
    setIsInfoTooltipPopupOpen(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {isUserChecked ? (
          <>
            {["/", "/movies", "/saved-movies", "/profile"].includes(
              location.pathname
            ) ? (
              <Header loggedIn={isloggedIn} />
            ) : null}
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route
                path="/movies"
                element={
                  <ProtectedRoute loggedIn={isloggedIn}>
                    <Movies
                      movies={movies}
                      onSearch={handleSearch}
                      numberCardsToRender={numberCardsToRender}
                      numberCardsToAdd={numberCardsToAdd}
                      onSave={handleSaveMovie}
                      onDelete={handleDeleteMovie}
                      savedMoviesIds={savedMoviesIds}
                      savedMovies={savedMovies}
                      isLoading={isLoading}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute loggedIn={isloggedIn}>
                    <SavedMovies
                      savedMovies={savedMovies}
                      onDelete={handleDeleteMovie}
                      savedMoviesIds={savedMoviesIds}
                      isLoading={isLoading}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute loggedIn={isloggedIn}>
                    <Profile
                      loggedIn={isloggedIn}
                      onExit={handleSignOut}
                      onEditProfile={handleUpdateUserInfo}
                      isSuccess={isSuccess}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <Register
                    onRegister={handleRegisterSubmit}
                    loggedIn={isloggedIn}
                  />
                }
              ></Route>
              <Route
                path="/signin"
                element={
                  <Login onLogin={handleLoginSubmit} loggedIn={isloggedIn} />
                }
              ></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
            {["/", "/movies", "/saved-movies"].includes(location.pathname) ? (
              <Footer />
            ) : null}
            <InfoTooltip
              isOpen={isInfoTooltipPopupOpen}
              isSuccess={isSuccess}
              onClose={closeAllPopups}
            />
          </>
        ) : (
          <Preloader />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
