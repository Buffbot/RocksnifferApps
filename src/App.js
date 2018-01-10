import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Notification from './components/notification';
import AccuracyPercentage from './components/accuracy_percentage';
import AlbumArt from './components/album_art';
import AlbumTitle from './components/album_title';
import BandName from './components/band_name';
import SongTitle from './components/song_title';
import Main from './components/main';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/notification" component={Notification}/>
          <Route path="/root" component={Main}/>
          <Route path="/accuracy" component={AccuracyPercentage}/>
          <Route path="/album_art" component={AlbumArt}/>
          <Route path="/album_title" component={AlbumTitle}/>
          <Route path="/song_title" component={SongTitle}/>
          <Route path="/band_name" component={BandName}/>
        </div>
      </Router>
    );
  }
}

export default App;
