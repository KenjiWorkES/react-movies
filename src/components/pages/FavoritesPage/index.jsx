import { useContext, useEffect, useState } from 'react';
import useSearch from '../../../hooks/useSearch';
import { MotionPictureContext } from '../../../context/motions-context';

import React from 'react';
import MotionGrid from '../../organisms/MotionGrid';
import { Heading, Loading, SearchInput } from '../../atoms';

const FavoritesPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);

  const [title, setTitle] = useState('Bookmarked Movies');
  const { motions, isLoading } = useContext(MotionPictureContext);

  const { filteredMotions, searchHandler, alreadySearch } = useSearch(
    motions,
    title,
    setTitle
  );

  useEffect(() => {
    if (motions) {
      const moviesMotions = motions.filter(
        (motion) => motion.category === 'Movie' && motion.isBookmarked === true
      );
      const seriesMotions = motions.filter(
        (motion) =>
          motion.category === 'TV Series' && motion.isBookmarked === true
      );
      setSeriesData(seriesMotions);
      setMovieData(moviesMotions);
    }
  }, [motions]);

  if (isLoading || !filteredMotions) {
    return <Loading />;
  }

  return (
    <>
      <SearchInput
        onSubmit={searchHandler}
        placeholder="Search for movies or TV series"
      />
      <Heading text={title} />
      <MotionGrid motionPictures={movieData} />
      {!alreadySearch && (
        <>
          <Heading text="Bookmarked TV Series" />
          <MotionGrid motionPictures={seriesData} />
        </>
      )}
    </>
  );
};

export default FavoritesPage;
