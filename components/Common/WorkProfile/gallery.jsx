import React from 'react';
import { Button, Container } from 'react-bootstrap';

import './styles.scss';

const Gallery = (props) => {
  const { data } = props;

  return (
    <div className="gallery__column">
      {data.map(item => (
        <img className="gallery__column-img" src={item} />
      ))}
    </div>
  )
};

export default Gallery;
