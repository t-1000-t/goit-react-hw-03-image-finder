import React, { Component } from 'react';
import styles from './Search.module.css';

const searchform = [styles.searchform];

export default class SearchInput extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <form className={searchform} onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={query}
          autoComplete="off"
          placeholder="Search images..."
        />
        <button type="submit">search</button>
      </form>
    );
  }
}
