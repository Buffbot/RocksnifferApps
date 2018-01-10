import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import AccuracyPercentage from '../accuracy_percentage';
import AlbumArt from '../album_art';
import AlbumTitle from '../album_title';
import BandName from '../band_name';
import SongTitle from '../song_title';

class Notification extends Component {
  render() {
    return (
      <div className="notification">
        <div className="notification-header">
          <img
            src={require('../../assets/rs_pick.png')}
            className="pick-icon" />
          <div className="notification-header-label">
            Current Song
          </div>
          <AccuracyPercentage percent={this.props.percent} />
        </div>
        <div className="notification-body">
          <div className="notification-song-data">
            <SongTitle title={this.props.songTitle} />
            <BandName name={this.props.bandName} />
            <AlbumTitle title={this.props.albumTitle} />
          </div>
          <AlbumArt
            imageUrl={this.props.imageUrl}
            size={100} />
        </div>
      </div>
    );
  }
}

export default Notification;
