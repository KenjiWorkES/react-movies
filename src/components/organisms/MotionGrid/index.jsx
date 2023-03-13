import React from 'react';
import './styles.scss';
import { MotionCard } from '../../molecules';

const MotionGrid = ({ isTrending, motionPictures }) => {
  return (
    <section className={`cardGrid ${isTrending && 'cardGrid--trending'}`}>
      {motionPictures.map((motion) => (
        <MotionCard
          id={motion.id}
          key={motion.id}
          title={motion.title}
          year={motion.year}
          rating={motion.rating}
          image={
            !isTrending ? motion.thumbnail.regular : motion.thumbnail.trending
          }
          isTrending={isTrending}
          category={motion.category}
          isBookmarked={motion.isBookmarked}
        />
      ))}
    </section>
  );
};

export default MotionGrid;
