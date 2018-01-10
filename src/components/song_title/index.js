import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SongTitle extends Component {
  static defaultProps = {
    name: 'Song Title'
  };

  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <div className="song-name">
        { this.props.title }
      </div>
    );
  }
}

export default SongTitle;
