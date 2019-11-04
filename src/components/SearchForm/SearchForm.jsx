import React, { Component, createRef } from 'react';
// import { ToastContainer, toast, Zoom } from 'react-toastify';
import Gallery from '../Gallery/Gallery';
import styles from './SearchForm.module.css';

const searchform = [styles.searchform];

class SearchForm extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    articles: [],
  };

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?key=14147963-1172996dfbc4032cf6219bd1a&q=cats&image_type=photo&pretty=true',
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          articles: data.hits,
        });
        // console.log(data);
      });
  }

  render() {
    const { articles } = this.state;
    return (
      <form className={searchform}>
        <input type="text" autoComplete="off" placeholder="Search images..." />
        <div>{articles.length > 0 && <Gallery articles={articles} />}</div>
        {/* <Gallery /> */}
      </form>
    );
  }
}

export default SearchForm;
