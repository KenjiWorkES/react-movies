import { useContext, useEffect, useState } from 'react';
import { MotionPictureContext } from '../../../context/motions-context';

import React from 'react';
import MotionGrid from '../../organisms/MotionGrid';
import { Heading, Loading, SearchInput } from '../../atoms';

const HomePage = () => {
  const [trendingData, setTrendingData] = useState([]);

  const { motions, isLoading } = useContext(MotionPictureContext);

  useEffect(() => {
    if (motions) {
      const trendingMotions = motions.filter((motion) => motion.isTrending);
      setTrendingData(trendingMotions);
    }
  }, [motions]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <SearchInput placeholder="Search for movies or TV series" />
      <Heading text="Trending" />
      <MotionGrid motionPictures={trendingData} isTrending />
      <Heading text="Recommended for you" />
      <MotionGrid motionPictures={motions} />
    </>
  );
};

export default HomePage;
