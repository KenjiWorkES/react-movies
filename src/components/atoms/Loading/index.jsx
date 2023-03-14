import React from 'react';
import './styles.scss';

const Loading = () => {
  return (
    <section className="loading">
      <div className="loading__spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loading;
