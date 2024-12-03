import { Routes, Route } from 'react-router-dom';
import './App.css'
import Accueil from './pages/Accueil';
import ListeFilms from './pages/ListeFilms';
import DetailsFilm from './pages/DetailsFilm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/films" element={<ListeFilms />} />
      <Route path="/films/:id" element={<DetailsFilm />} />
    </Routes>
  )
}

export default App
