import React from 'react';
import T from 'prop-types';
import styles from './PhotoCard.module.css';

const photocard = [styles.photocard];
const stats = [styles.stats];
const statsitem = [styles.statsitem];
const materialicons = [styles.materialicons];
const fullscreenbutton = [styles.fullscreenbutton];
const button = [styles.button];
const galleryitem = [styles.galleryitem];

const PhotoCard = () => {
  return (
    <div className={photocard}>
      <img src="" alt="" />

      <div className={stats}>
        <p className={statsitem}>
          <i className="material-icons">thumb_up</i>
          1108
        </p>
        <p className={statsitem}>
          <i className="material-icons">visibility</i>
          320321
        </p>
        <p className={statsitem}>
          <i className="material-icons">comment</i>
          129
        </p>
        <p className={statsitem}>
          <i className="material-icons">cloud_download</i>
          176019
        </p>
      </div>

      {/* <!-- Кнопка для открытия модалки с большим изображением, появляется при наведении --> */}
      <button type="button" className={(fullscreenbutton, button)}>
        <i className={materialicons}>zoom_out_map</i>
      </button>
    </div>
  );
};

PhotoCard.propTypes = {
  onChange: T.func.isRequired,
  amount: T.number,
};

export default PhotoCard;
