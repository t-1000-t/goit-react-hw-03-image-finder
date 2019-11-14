import React from 'react';
import { createPortal } from 'react-dom';
import preloader from './loading.gif';

const LOADER_ROOT = document.querySelector('#loader-root');

const ThreeDots = () =>
  createPortal(<img src={preloader} alt="load" />, LOADER_ROOT);

export default ThreeDots;
