import { NotFound } from '../../molecules';

import { useContext, useEffect, useState } from 'react';
import { MotionPictureContext } from '../../../context/motions-context';
import MotionGrid from '../../organisms/MotionGrid';
import { Heading, Loading, SearchInput } from '../../atoms';

import useSearch from '../../../hooks/useSearch';

const MoviesPage = () => {
  const [title, setTitle] = useState('Movies');
  const [moviesData, setMoviesData] = useState([]);

  const { motions, isLoading, isError } = useContext(MotionPictureContext);

  const { filteredMotions, searchHandler, alreadySearch } = useSearch(
    moviesData,
    title,
    setTitle
  );

  useEffect(() => {
    if (motions) {
      const moviesMotions = motions.filter(
        (motion) => motion.category === 'Movie'
      );
      setMoviesData(moviesMotions);
    }
  }, [motions]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <NotFound text="Something went wrong. Please try again." />;
  }

  return (
    <>
      <SearchInput onSubmit={searchHandler} placeholder="Search for Movies" />
      <Heading text={title} />
      <MotionGrid motionPictures={filteredMotions} />
    </>
  );
};

export default MoviesPage;
