import React, { useState } from 'react';
import './styles.scss';

const BookmarkButton = (initialState, onBookmark) => {
  const [isActive, setIsActive] = useState(initialState);

  const onClickHandler = () => {
    setIsActive((prevState) => !prevState);
    onBookmark(isActive);
  };

  const svgClasses = [
    'favorite__icon',
    isActive ? 'favorite__icon--active' : '',
  ].join(' ');

  return (
    <button class="favorite" onClick={onClickHandler}>
      <svg class={svgClasses}>
        <use href="#bookmark10" xlink-href="#bookmark" />
      </svg>
    </button>
  );
};

export default BookmarkButton;
