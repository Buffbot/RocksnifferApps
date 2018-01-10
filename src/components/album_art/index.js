import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AlbumArt extends Component {
  static defaultProps = {
    imageUrl: require('../../assets/rs_pick.png'),
    size: 200,
  };

  static propTypes = {
    imageUrl: PropTypes.string,
    size: PropTypes.number,
  };

  render() {
    return (
      <div className="album-art">
        <img src={this.props.imageUrl} height={this.props.size} width={this.props.size} />
      </div>
    );
  }
}

export default AlbumArt;
