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
      <Route path="/tv-shows" element={<TvShowsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
};

export default App;
