import React from 'react';
import T from 'prop-types';
import styles from './Modal.module.css';

const modal = [styles.modal];
const overlay = [styles.overlay];

const Modal = () => (
  <div className={overlay}>
    <div className={modal}>
      <img src="" alt="" />
    </div>
  </div>
);

Modal.propTypes = {
  balance: T.string.isRequired,
  income: T.string.isRequired,
  expenses: T.string.isRequired,
};

export default Modal;
