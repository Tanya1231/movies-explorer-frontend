import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="pageNotFound">
      <h2>404</h2>
      <p>Страница не найдена</p>
      <Link to="/" className="pageNotFound-exit">
        Назад
      </Link>
    </div>
  );
}

export default PageNotFound;
