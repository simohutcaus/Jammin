import React from 'react';
import './spotifylist.css';
import Spotify from '../Spotify/Spotify';

class SpotifyList extends React.Component {

    render() {
        return ( <div className="SpotifyList"> 
        {
            this.props.searchTracks.map(searchTracks => {
                return <Spotify key = {searchTracks.id} tracks={searchTracks} />
            })
        }
        </div>
        )
    }
}

export default SpotifyList;