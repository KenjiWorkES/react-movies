import { useContext, useEffect, useState } from 'react';
import { MotionPictureContext } from '../../../context/motions-context';
import MotionGrid from '../../organisms/MotionGrid';
import { Heading, Loading } from '../../atoms';

const TvShowsPage = () => {
  const [tvShowsData, setTvShowsData] = useState([]);

  const { motions, isLoading } = useContext(MotionPictureContext);

  useEffect(() => {
    if (motions) {
      const tvShowsMotions = motions.filter(
        (motion) => motion.category === 'TV Series'
      );
      setTvShowsData(tvShowsMotions);
    }
  }, [motions]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Heading text="Tv Series" />
      <MotionGrid motionPictures={tvShowsData} />
    </>
  );
};

export default TvShowsPage;
