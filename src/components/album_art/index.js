import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class AlbumArt extends Component {
  static defaultProps = {
    size: 200,
    isVisible: true,
  };

  static propTypes = {
    size: PropTypes.number,
  };

  get image() {
    const { imageData } = this.props;

    if (!imageData) {
      return null;
    }

    return `data:image/jpeg;base64, ${imageData}`;
  }

  render() {
    return (
      <div className="album-art">
        <img src={this.image} />
        <img src={require('../../assets/record.png')} />
      </div>
    );
  }
}

export default AlbumArt;
