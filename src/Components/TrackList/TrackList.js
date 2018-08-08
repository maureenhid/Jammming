import React from 'react';
import Track from '../Track/Track';
import TrackList from './TrackList.css';

class TrackList extends Component {
  render () {
    return (
      <div className="TrackList">
      {this.props.tracks.map(track => {
        return <Track
        track={track}
        key={track.id}
        onRemove={this.props.onRemove}
      })
    }
</div>
);
<Track
onAdd={this.props.onAdd}
addTrack={this.props.track}
onRemove={this.props.onRemove} />
  }
  this.props.track.name
this.props.track.artist
this.props.track.album
}

export default TrackList;
