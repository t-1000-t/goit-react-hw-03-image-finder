import React, { Component, createRef } from 'react';
// import { ToastContainer, toast, Zoom } from 'react-toastify';
import shortid from 'shortid';
import Gallery from '../Gallery/Gallery';
import styles from './SearchForm.module.css';

const searchform = [styles.searchform];

class SearchForm extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    return (
      <form className={searchform}>
        <input type="text" autoComplete="off" placeholder="Search images..." />
        <Gallery />
      </form>
    );
  }
}

export default SearchForm;
