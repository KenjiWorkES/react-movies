import React from 'react';
import './styles.scss';

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} className="picture" />;
};

export default Image;
