import React, { Component } from 'react';
import styles from './Search.module.css';

const searchform = [styles.searchform];

export default class SearchInput extends Component {
  state = {};

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    const { query } = this.state;
    console.log(query);
    e.preventDefault();

    this.props.onSearch(query);

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
        {/* <button type="submit">search</button> */}
      </form>
    );
  }
}
