import React, { Component } from 'react';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import createPortal from 'react-dom';

const ERROR_ROOT = document.querySelector('#error-root');

class ErrorNotyf extends Component {
  errorNotyf = () =>
    createPortal(
      toast.error('Ошибка!', {
        position: toast.POSITION.BOTTOM_LEFT,
      }),
      ERROR_ROOT,
    );

  render() {
    return <ToastContainer autoClose={2500} transition={Zoom} />;
  }
}

export default ErrorNotyf;
