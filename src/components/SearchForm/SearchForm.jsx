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
  };

  componentDidMount() {
    // this.fetchArticles();
  }

  fetchArticles = query => {
    this.setState({ isLoading: true });
    articlesAPI
      .fetchArticles(query)
      .then(data => {
        this.setState({ articles: data });
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
      <form>
        <SearchInput onSearch={this.fetchArticles} />
        {error && <ErrorNotyf />}
        {isLoading && <ThreeDots />}
        <div>{articles.length > 0 && <Gallery articles={articles} />}</div>
      </form>
    );
  }
}

export default SearchForm;
