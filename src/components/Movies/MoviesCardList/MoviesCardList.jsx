const MoviesCardList = ({ location, children }) => {
  return (
    <>
      <section className="movies-card-list">{children}</section>
      {location.pathname === "/movies" && (
        <div className="more-container">
          <button className="more-button">Ещё</button>
        </div>
      )}
    </>
  );
};

export default MoviesCardList;
