import "../index.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ListeFilms = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-2xl">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-100">
        Liste des Films Star Wars
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {films.map((film) => {
          const filmId = film.url.split("/").filter(Boolean).pop();
          return (
            <Link
              key={filmId}
              to={`/films/${filmId}`}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
            >
              <h2 className="text-2xl text-gray-100 mb-2">{film.title}</h2>
              <p className="text-gray-400">Episode {filmId}</p>
            </Link>
          );
        })}
      </div>
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default ListeFilms;
