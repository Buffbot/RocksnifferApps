import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AlbumArt extends Component {
  static defaultProps = {
    size: 200,
  };

  static propTypes = {
    size: PropTypes.number,
  };

  get image() {
    const { imageData } = this.props;

    if (!imageData) {
      return require('../../assets/record.png');
    }

    return `data:image/jpeg;base64, ${imageData}`;
  }

  render() {
    return (
      <div className="album-art">
        <img src={this.image} height={this.props.size} width={this.props.size} />
      </div>
    );
  }
}

export default AlbumArt;
