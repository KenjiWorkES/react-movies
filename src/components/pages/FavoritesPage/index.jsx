import { NotFound } from '../../molecules';

import { useContext, useEffect, useState } from 'react';
import useSearch from '../../../hooks/useSearch';
import { MotionPictureContext } from '../../../context/motions-context';

import React from 'react';
import MotionGrid from '../../organisms/MotionGrid';
import { Heading, Loading, SearchInput } from '../../atoms';

const FavoritesPage = () => {
  const [bookMarkedData, setBookMarkedData] = useState([]);

  const [title, setTitle] = useState('Bookmarked Movies');
  const { motions, isLoading, isError } = useContext(MotionPictureContext);

  const { filteredMotions, searchHandler, alreadySearch } = useSearch(
    bookMarkedData,
    title,
    setTitle
  );

  useEffect(() => {
    if (motions) {
      const bookmarkedMotions = motions.filter((motion) => motion.isBookmarked);
      setBookMarkedData(bookmarkedMotions);
    }
  }, [motions]);

  const movieData = bookMarkedData.filter(
    (motion) => motion.category === 'Movie'
  );
  const seriesData = bookMarkedData.filter(
    (motion) => motion.category === 'TV Series'
  );

  if (isLoading || !filteredMotions) {
    return <Loading />;
  }

  if (isError) {
    return <NotFound text="Something went wrong. Please try again." />;
  }

  return (
    <>
      <SearchInput
        onSubmit={searchHandler}
        placeholder="Search for movies or TV series"
      />
      <Heading text={title} />
      {!alreadySearch && <MotionGrid motionPictures={movieData} />}
      {alreadySearch && <MotionGrid motionPictures={filteredMotions} />}
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
