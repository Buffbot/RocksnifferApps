import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class AlbumTitle extends Component {
  static defaultProps = {
    title: 'Album Title',
    year: 2000
  };

  static propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
  };

  render() {
    return (
      <div className="album-title">
        { this.props.title } ({ this.props.year })
      </div>
    );
  }
}

export default AlbumTitle;
