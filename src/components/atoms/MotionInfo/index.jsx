import React from 'react';
import './styles.scss';

const MotionInfo = ({ text, hasIcon, iconId }) => {
  const id = '#' + iconId;

  return (
    <li className="card__item">
      {hasIcon && (
        <svg v-if="hasIcon" className="card__itemIcon">
          <use className="card__svg" href={id} xlink-href={id} />
        </svg>
      )}
      <span>{text}</span>
    </li>
  );
};

export default MotionInfo;
