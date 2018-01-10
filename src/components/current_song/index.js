import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import AlbumArt from '../album_art';
import AlbumTitle from '../album_title';
import BandName from '../band_name';
import SongTitle from '../song_title';

import './style.css';

class CurrentSong extends Component {
  render() {
    return (
      <div className={classnames("current-song", { isVisible: this.props.isVisible })} >
      <AlbumArt
        imageData={this.props.imageData}
        isVisible={this.props.isVisible} />
        <div className={classnames("current-song-info", { isVisible: this.props.isVisible })}>
          <SongTitle title={this.props.songName} />
          <BandName name={this.props.artistName} />
          <AlbumTitle title={this.props.albumName} year={this.props.albumYear} />
        </div>
      </div>
    );
  }
}

export default CurrentSong;
