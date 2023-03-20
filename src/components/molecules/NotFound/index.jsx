import React from 'react';
import './styles.scss';
import { Heading } from '../../atoms';

const NotFound = ({ text }) => {
  return (
    <article class="noBookmark">
      <img class="noBookmark__image" src="/assets/WarningCircle.svg" alt="" />
      <Heading className="noBookmark__text" text={text} />
    </article>
  );
};

export default NotFound;
