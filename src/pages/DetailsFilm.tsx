import "../index.css";
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const DetailsFilm = () => {
  const { id } = useParams<{ id: string }>();
  const [film, setFilm] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFilm(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-2xl">Chargement...</div>
      </div>
    );
  }

  if (!film) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-2xl">Film non trouvé</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div key={film.episode_id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">{film.title}</h1>
        <p className="text-gray-400 mb-4">{film.opening_crawl}</p>
        <p className="text-gray-400 mb-2"><strong>Réalisateur:</strong> {film.director}</p>
        <p className="text-gray-400 mb-2"><strong>Producteur:</strong> {film.producer}</p>
        <p className="text-gray-400 mb-4"><strong>Date de sortie:</strong> {film.release_date}</p>
        <Link to="/films" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
          Retour à la liste des films
        </Link>
      </div>
    </div>
  );
};

export default DetailsFilm;