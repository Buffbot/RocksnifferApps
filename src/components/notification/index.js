import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.css';

import AccuracyPercentage from '../accuracy_percentage';
import AlbumArt from '../album_art';
import AlbumTitle from '../album_title';
import BandName from '../band_name';
import SongTitle from '../song_title';

class Notification extends Component {
  render() {
    return (
      <div className={classnames("notification", { isVisible: this.props.isVisible })}>
        <div className="notification-header">
          <img
            src={require('../../assets/rs_pick.png')}
            className="pick-icon" />
          <div className="notification-header-label">
            Current Song
          </div>
          <AccuracyPercentage
            totalNotes={this.props.totalNotes}
            totalNotesHit={this.props.totalNotesHit} />
        </div>
        <div className="notification-body">
          <div className="notification-song-data">
            <SongTitle title={this.props.songName} />
            <BandName name={this.props.artistName} />
            <AlbumTitle
              title={this.props.albumName}
              isVisible={this.props.isVisible} />
          </div>
          <AlbumArt
            imageData={this.props.imageData}
            size={100} />
        </div>
      </div>
    );
  }
}

export default Notification;
