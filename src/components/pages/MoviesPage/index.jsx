import { useContext, useEffect, useState } from 'react';
import { MotionPictureContext } from '../../../context/motions-context';
import MotionGrid from '../../organisms/MotionGrid';
import { Heading, Loading } from '../../atoms';

const MoviesPage = () => {
  const [moviesData, setMoviesData] = useState([]);

  const { motions, isLoading } = useContext(MotionPictureContext);

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

  return (
    <>
      <Heading text="Movies" />
      <MotionGrid motionPictures={moviesData} />
    </>
  );
};

export default MoviesPage;
