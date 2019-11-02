import React from 'react';
import T from 'prop-types';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const gallery = [styles.gallery];

const Gallery = () => {
  return (
    <ul className={gallery}>
      <li>
        <PhotoCard />
      </li>
    </ul>
  );
};

Gallery.propTypes = {
  items: T.arrayOf(
    T.shape({
      transactionType: T.string.isRequired,
      amount: T.number.isRequired,
      date: T.number.isRequired,
    }),
  ),
};

export default Gallery;
