import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery';
import articlesAPI from '../Services/ArticlesAPI';
import ThreeDots from '../Loader/Loader';
import ErrorNotyf from '../Services/ErrorNotyf';
import SearchInput from '../SearchInput/SearchInput';

class SearchForm extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    isLoading: false,
    articles: [],
    error: null,
    pageNum: 1,
    query: '',
  };

  componentDidMount() {
    // this.fetchArticles();
  }

  onSearch = query => {
    console.log(query);
    this.setState({
      query: { query },
      isLoading: true,
    });
    console.log(query);
    this.fetchArticles();
  };

  fetchArticles = () => {
    const { pageNum, query } = this.state;
    console.log(query);
    console.log(pageNum);
    articlesAPI
      .fetchArticles(query, pageNum)
      .then(data => {
        this.setState(state => ({
          articles: [...state.articles, ...data],
        }));
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { articles, isLoading, error } = this.state;
    return (
      <div>
        <SearchInput onSearch={this.onSearch} />
        {error && <ErrorNotyf />}
        {isLoading && <ThreeDots />}
        <div>{articles.length > 0 && <Gallery articles={articles} />}</div>
      </div>
    );
  }
}

export default SearchForm;
