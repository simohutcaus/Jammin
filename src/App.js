import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../src/Components/SearchBar/SearchBar.js';
import SpotifySearch from '../src/utils/SpotifySearch.js';
import SpotifyList from '../src/Components/SpotifyList/spotifylist';
import Spotify from '../src/Components/Spotify/Spotify';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTracks: [],
    }
this.searchSpotify = this.searchSpotify.bind(this)
}

searchSpotify() {
  SpotifySearch.search().then(tracks => this.setState({searchTracks: tracks}));
}
  render() {
    return (
      <div className="App">
        <SearchBar searchSpotify={this.searchSpotify} />>
        <SpotifyList searchTracks={this.state.searchTracks} />
      </div>
    );
  }
}

export default App;
