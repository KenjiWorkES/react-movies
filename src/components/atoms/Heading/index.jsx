import React from 'react';
import './styles.scss';

const Heading = ({ text, className }) => {
  return <h2 className={`heading ${className}`}>{text}</h2>;
};

export default Heading;
