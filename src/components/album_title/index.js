import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AlbumTitle extends Component {
  static defaultProps = {
    title: 'Album Title'
  };

  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <div className="album-title">
        { this.props.title }
      </div>
    );
  }
}

export default AlbumTitle;
