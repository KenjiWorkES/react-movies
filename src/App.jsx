import './index.scss';
import { Route, Routes } from 'react-router-dom';
import {
  HomePage,
  MoviesPage,
  FavoritesPage,
  TvShowsPage,
} from '@/components/pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/tv-shows" element={<FavoritesPage />} />
      <Route path="/favorites" element={<TvShowsPage />} />
    </Routes>
  );
};

export default App;
