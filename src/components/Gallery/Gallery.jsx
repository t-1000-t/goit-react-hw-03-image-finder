import React from 'react';
import T from 'prop-types';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const gallery = [styles.gallery];

const Gallery = ({ articles }) => (
  <ul className={gallery}>
    {articles.map(elem => (
      <li key={elem.id}>
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

Gallery.propType = {
  PhotoCard: T.string.isRequired,
  articles: T.array.isRequired,
};

export default Gallery;
