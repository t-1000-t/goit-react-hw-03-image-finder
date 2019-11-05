import React from 'react';
import T from 'prop-types';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const gallery = [styles.gallery];

const Gallery = ({ articles }) => {
  return (
    <ul className={gallery}>
      {articles.map(elem => (
        <li>
          <PhotoCard
            id={elem.id}
            webformatURL={elem.webformatURL}
            largeImageURL={elem.largeImageURL}
            likes={elem.likes}
            views={elem.views}
            comments={elem.comments}
            downloads={elem.downloads}
          />
        </li>
      ))}
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
