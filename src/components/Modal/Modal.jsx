import React, { Component, createRef } from 'react';
import T from 'prop-types';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const MODAL_ROOT = document.querySelector('#modal-root');

const modal = [styles.modal];
const overlay = [styles.overlay];

class Modal extends Component {
  propTypes = {
    id: T.number.isRequired,
    largeImageURL: T.string.isRequired,
  };

  modalRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  }

  handleKey = e => {
    if (e.code !== 'Escape') return;
    this.props.onClose();
  };

  handleMouseClick = e => {
    console.log(e.target);
    console.log(this.modalRef);
    if (e.target && this.modalRef.current !== e.target) return;
    this.props.onClose();
  };

  render() {
    const { id, largeImageURL } = this.props;
    return createPortal(
      <div
        className={overlay}
        ref={this.modalRef}
        onClick={this.handleMouseClick}
        role="presentation"
      >
        <div className={modal}>
          <img src={largeImageURL} alt="img" id={id} />
        </div>
      </div>,
      MODAL_ROOT,
    );
  }
}

export default Modal;
