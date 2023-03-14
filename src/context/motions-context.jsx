import { createContext } from 'react';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { getMotions } from '../helpers/posts';
import { getSingleMedia } from '../helpers/media';

const defaultValue = {
  motions: [],
  isLoading: null,
};

export const MotionPictureContext = createContext(defaultValue);

const MotionPictureContextProvider = ({ children }) => {
  const fetchAllPosts = async () => {
    const fetchedMotions = await getMotions();

    const motionsArray = [];

    for (const motion of fetchedMotions) {
      const regularImage = await getSingleMedia(motion.acf.regular);

      let trendingImage = null;

      if (motion.acf.trending) {
        trendingImage = await getSingleMedia(motion.acf.trending);
      }

      const motionAux = {
        id: motion.id,
        title: motion.title.rendered,
        thumbnail: {
          trending: trendingImage ? trendingImage.source_url : trendingImage,
          regular: regularImage.source_url,
        },
        year: motion.acf.year,
        category: motion.acf.category,
        rating: motion.acf.rating,
        isBookmarked: false,
        isTrending: motion.acf.istrending,
      };

      motionsArray.push(motionAux);
    }

    return motionsArray;
  };

  const { data, isLoading, isError } = useQuery('posts', fetchAllPosts);

  const contextValue = {
    motions: data,
    isLoading: isLoading,
  };

  return (
    <MotionPictureContext.Provider value={contextValue}>
      {children}
      <ReactQueryDevtools />
    </MotionPictureContext.Provider>
  );
};

export default MotionPictureContextProvider;
