import React from 'react';

class Spotify extends React.Component {
    render() {
        //console.log('this is the props' + this.props.tracks);
        return (
            <div className="Spotify">
            <div className="Spotify-information">
            <p>{this.props.tracks.name}</p>
            <p>{this.props.tracks.artist} | {this.props.tracks.album}</p>
            </div>
            </div>
        )
    }
}

export default Spotify;