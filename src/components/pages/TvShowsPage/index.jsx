import { useContext, useEffect, useState } from 'react';
import { MotionPictureContext } from '../../../context/motions-context';
import MotionGrid from '../../organisms/MotionGrid';
import { Heading, Loading, SearchInput } from '../../atoms';

import useSearch from '../../../hooks/useSearch';

const TvShowsPage = () => {
  const [title, setTitle] = useState('Tv Series');
  const [tvShowsData, setTvShowsData] = useState([]);

  const { motions, isLoading } = useContext(MotionPictureContext);

  const { filteredMotions, searchHandler, alreadySearch } = useSearch(
    tvShowsData,
    title,
    setTitle
  );

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
      <SearchInput
        onSubmit={searchHandler}
        placeholder="Search for TV series"
      />
      <Heading text={title} />
      <MotionGrid motionPictures={filteredMotions} />
    </>
  );
};

export default TvShowsPage;
