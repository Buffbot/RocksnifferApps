import React, { Component } from 'react';
import $ from "jquery";
import { HashRouter as Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Notification from './components/notification';
import AccuracyPercentage from './components/accuracy_percentage';
import AlbumArt from './components/album_art';
import AlbumTitle from './components/album_title';
import BandName from './components/band_name';
import SongTitle from './components/song_title';
import CurrentSong from './components/current_song';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
    };
  }

  componentDidMount() {
    setInterval(this.refresh.bind(this), 1000);
  }

  refresh() {
    $.getJSON("http://localhost:9938", this.onRefresh.bind(this));
  }

  onRefresh(data) {
    if (data.success) {
      const {
        songLength,
        ablbumYear,
        numArrangements,
        artistName,
        songName,
        albumName,
        albumYear,
      } = data.songDetails;

      const {
        TotalNotes,
        songTimer,
        currentHitStreak,
        currentMissStreak,
        highestHitStreak,
        songId,
        totalNotesHit,
        totalNotesMissed,
      } = data.memoryReadout;

      const hasData = songLength && albumYear && numArrangements;
      const isInSong = songTimer > 1;

      if (!hasData || !isInSong) {
        this.setVisibility(false);
      } else {
        this.setState({
          artistName,
          songName,
          albumName,
          albumYear,
          imageData: data.albumCoverBase64,
          totalNotes: TotalNotes,
          currentHitStreak,
          currentMissStreak,
          totalNotesHit,
          totalNotesMissed,
        });

        this.setVisibility(true);
      }
    } else {
      this.setVisibility(false);
    }
  }

  setVisibility(isVisible) {
    this.setState({
      isVisible,
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/notification" render={(props) => ( <Notification {...this.state} /> )} />
          <Route path="/accuracy" render={(props) => ( <AccuracyPercentage {...this.state} /> )} />
          <Route path="/album_art" render={(props) => ( <AlbumArt {...this.state} /> )} />
          <Route path="/album_title" render={(props) => ( <AlbumTitle title={this.state.albumName} year={this.state.albumYear} /> )} />
          <Route path="/song_title" render={(props) => ( <SongTitle title={this.state.songName} /> )} />
          <Route path="/band_name" render={(props) => ( <BandName name={this.state.artistName} /> )} />
          <Route path="/current_song" render={(props) => ( <CurrentSong {...this.state} /> )} />
        </div>
      </Router>
    );
  }
}

export default App;
