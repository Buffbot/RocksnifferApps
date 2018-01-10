import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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

    console.log(this.props.is);
    if (!imageData) {
      return null;
    }

    return `data:image/jpeg;base64, ${imageData}`;
  }

  render() {
    return (
      <div className={classnames("album-art", { isVisible: this.props.isVisible })}>
        <img src={require('../../assets/record.png')} />
        <img src={this.image} />
      </div>
    );
  }
}

export default AlbumArt;
