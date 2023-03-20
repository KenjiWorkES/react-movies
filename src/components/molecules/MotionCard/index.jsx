import { MotionPictureContext } from '../../../context/motions-context';

import React, { useContext } from 'react';
import './styles.scss';
import { MotionInfo, BookmarkButton, Image } from '../../atoms';

const MotionCard = ({
  id,
  title,
  year,
  rating,
  image,
  isTrending,
  category,
  isBookmarked,
}) => {
  const iconId = category === 'Movie' ? 'movies10' : 'tv10';

  const { bookmarkHandler } = useContext(MotionPictureContext);

  const onBookmarkCard = (value) => {
    bookmarkHandler(id, value);
  };

  return (
    <figure className={`card ${isTrending && 'card--trending'}`}>
      <div className="card__imageContainer">
        <Image src={image} alt={title} />
        <BookmarkButton
          initialState={isBookmarked}
          onBookmark={onBookmarkCard}
        />
      </div>
      <figcaption
        className={`card__caption ${isTrending && 'card__caption--trending'}`}
      >
        <ul className="card__information">
          <MotionInfo text={year} />
          <MotionInfo text={category} hasIcon={true} iconId={iconId} />
          <MotionInfo text={rating} />
        </ul>
        <h3 className={`card__title ${isTrending && 'card__title--trending'}`}>
          {title}
        </h3>
      </figcaption>
    </figure>
  );
};

export default MotionCard;
