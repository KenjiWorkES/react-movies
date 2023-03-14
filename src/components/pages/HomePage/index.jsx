import { useContext, useEffect, useState } from 'react';
import useSearch from '../../../hooks/useSearch';
import { MotionPictureContext } from '../../../context/motions-context';

import React from 'react';
import MotionGrid from '../../organisms/MotionGrid';
import { Heading, Loading, SearchInput } from '../../atoms';

const HomePage = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [title, setTitle] = useState('Recommended for you');
  const { motions, isLoading } = useContext(MotionPictureContext);

  const { filteredMotions, searchHandler, alreadySearch } = useSearch(
    motions,
    title,
    setTitle
  );

  useEffect(() => {
    if (motions) {
      const trendingMotions = motions.filter((motion) => motion.isTrending);
      setTrendingData(trendingMotions);
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
      <Heading text="Trending" />
      <MotionGrid motionPictures={trendingData} isTrending />
      <Heading text={title} />
      <MotionGrid motionPictures={filteredMotions} />
    </>
  );
};

export default HomePage;
