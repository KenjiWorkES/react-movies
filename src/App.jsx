import { useContext } from 'react';

import './index.scss';
import { Route, Routes } from 'react-router-dom';
import {
  HomePage,
  MoviesPage,
  FavoritesPage,
  TvShowsPage,
} from '@/components/pages';
import { MotionPictureContext } from './context/motions-context';

const App = () => {
  const { motions } = useContext(MotionPictureContext);
  console.log(motions);

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
