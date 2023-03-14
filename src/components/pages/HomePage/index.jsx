import { useContext, useEffect, useState } from 'react';
import { MotionPictureContext } from '../../../context/motions-context';

import React from 'react';
import MotionGrid from '../../organisms/MotionGrid';

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
    return <h1>Loading</h1>;
  }

  return (
    <>
      <MotionGrid motionPictures={trendingData} isTrending />
      <MotionGrid motionPictures={motions} />
    </>
  );
};

export default HomePage;
