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

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
      artistName: "The Ghost of Andrew WK",
      albumYear: 2089,
      songName: "Party like its 2089",
      albumName: "Party like its 2089 - the Album",
    };
  }

  componentDidMount() {
    setInterval(this.refresh.bind(this), 1000);
  }

  refresh() {
    $.getJSON("http://localhost:9938", this.onRefresh.bind(this));
  }

  onRefresh(data) {
    console.log("DATA", data);
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

      const memoryReadout = data.memoryReadout;

      const hasData = songLength && albumYear && numArrangements;
      const isInSong = memoryReadout.songTimer > 1;

      if (!hasData || !isInSong) {
        this.setVisibility(false);
      } else {
        this.setData({
          artistName,
          songName,
          albumName,
          albumYear,
          albumCoverBase64: data.albumCoverBase64,
        });

        this.setVisibility(true);
      }
    } else {
      this.setVisibility(false);
    }
  }

  setVisibility(isVisible) {
    this.setState({
      isVisible: false,
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/notification" render={(props) => ( <Notification {...this.state} /> )} />
          <Route path="/accuracy" render={(props) => ( <AccuracyPercentage {...this.state} /> )} />
          <Route path="/album_art" render={(props) => ( <AlbumArt {...this.state} /> )} />
          <Route path="/album_title" render={(props) => ( <AlbumTitle {...this.state} /> )} />
          <Route path="/song_title" render={(props) => ( <SongTitle {...this.state} /> )} />
          <Route path="/band_name" render={(props) => ( <BandName {...this.state} /> )} />
        </div>
      </Router>
    );
  }
}

export default App;
