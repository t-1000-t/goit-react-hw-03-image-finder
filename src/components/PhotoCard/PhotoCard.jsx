import React, { Component } from 'react';
import T from 'prop-types';
import styles from './PhotoCard.module.css';
import Modal from '../Modal/Modal';

const photocard = [styles.photocard];
const stats = [styles.stats];
const statsitem = [styles.statsitem];
const fullscreenbutton = [styles.fullscreenbutton];

class PhotoCard extends Component {
  static = {};

  propTypes = {
    id: T.number.isRequired,
    webformatURL: T.string.isRequired,
    likes: T.number.isRequired,
    views: T.number.isRequired,
    comments: T.number.isRequired,
    downloads: T.number.isRequired,
    largeImageURL: T.string.isRequired,
  };

  state = {
    isOpen: false,
  };

  handleOnModal = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  render() {
    const {
      id,
      webformatURL,
      likes,
      views,
      comments,
      downloads,
      largeImageURL,
    } = this.props;
    const { isOpen } = this.state;
    return (
      <div key={id} className={photocard}>
        <img src={webformatURL} alt="img" />

        <div className={stats}>
          <p className={statsitem}>
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className={statsitem}>
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className={statsitem}>
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className={statsitem}>
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>

        <button
          type="button"
          className={fullscreenbutton}
          onClick={this.handleOnModal}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>
        {isOpen && (
          <Modal
            id={id}
            largeImageURL={largeImageURL}
            onClose={this.handleOnModal}
          />
        )}
      </div>
    );
  }
}

export default PhotoCard;
