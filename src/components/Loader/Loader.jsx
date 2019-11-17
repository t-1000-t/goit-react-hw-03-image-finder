import React from 'react';
import { createPortal } from 'react-dom';
import preloader from './loading.gif';
import styles from './Loader.module.css';

const picturLoad = [styles.picturLoad];
const bgcolorWrapper = [styles.bgcolorWrapper];

const LOADER_ROOT = document.querySelector('#loader-root');

const ThreeDots = () =>
  createPortal(
    <div className={bgcolorWrapper}>
      <div className={picturLoad}>
        <img src={preloader} alt="load" />
      </div>
    </div>,
    LOADER_ROOT,
  );

export default ThreeDots;
