import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Accueil() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-100">
        Petit projet React utilisant l'api <a href='https://swapi.dev' className="text-blue-500 underline">Swapi</a>
      </h1>
      <Link to="/films" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-4">
        Voir les films StarWars
      </Link>
      <a href="https://github.com/ArthurAugis/ReactStarWars" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
        <FontAwesomeIcon icon={faGithub} className="w-6 h-6 mr-2" />
        Voir le projet sur GitHub
      </a>
    </div>
  );
}

export default Accueil;