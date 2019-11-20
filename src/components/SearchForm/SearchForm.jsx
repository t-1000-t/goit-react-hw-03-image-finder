import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery';
import articlesAPI from '../Services/ArticlesAPI';
import ThreeDots from '../Loader/Loader';
import ErrorNotyf from '../Services/ErrorNotyf';
import SearchInput from '../SearchInput/SearchInput';
import styles from './SearchForm.module.css';

const button = [styles.button];
const btnWrap = [styles.btnWrap];

class SearchForm extends Component {
  static propTypes = {};

  state = {
    isLoading: false,
    articles: [],
    error: null,
    pageNum: 1,
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      this.fetchArticles();
    }
  }

  onSearch = query => {
    this.setState({
      query,
      articles: [],
      isLoading: true,
      pageNum: 1,
    });
  };

  fetchArticles = () => {
    this.setState({ isLoading: true });

    const { pageNum, query } = this.state;

    articlesAPI
      .fetchArticles(query, pageNum)
      .then(data => {
        this.setState(state => ({
          articles: [...state.articles, ...data],
          pageNum: state.pageNum + 1,
        }));
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.getElementById('root').scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  render() {
    const { articles, isLoading, error } = this.state;
    return (
      <div>
        <SearchInput onSearch={this.onSearch} onFetch={this.fetchArticles} />
        {error && <ErrorNotyf />}
        {isLoading && <ThreeDots />}
        <div>{articles.length > 0 && <Gallery articles={articles} />}</div>
        <div className={btnWrap}>
          {articles.length > 0 && (
            <button
              className={button}
              type="button"
              onClick={this.fetchArticles}
            >
              Load more articles
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default SearchForm;
