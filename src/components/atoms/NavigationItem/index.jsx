import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Link, useLocation } from 'react-router-dom';

const NavigationItem = ({ iconId, path }) => {
  const [isActive, setIsActive] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === path) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location.pathname]);

  console.log(location);

  const id = '#' + iconId;

  const classNames = ['header__icon', isActive && 'header__icon--active'].join(
    ' '
  );

  return (
    <Link to={path}>
      <li className="header__item">
        <svg className={classNames}>
          <use href={id} xlinkHref={id} />
        </svg>
      </li>
    </Link>
  );
};

export default NavigationItem;
