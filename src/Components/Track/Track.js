import React from 'react';
import Track from './Track.css';

class Track extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction(isRemoval) {
    if(isRemoval) {
      return (<a className="Track-action" onClick={this.removeTrack}>-</a>)
    } else {
      return (<a className="Track-action" onClick={this.addTrack}>+</a>)
    }
  }

removeTrack() {
  this.props.onRemove(this.props.track);
}

  render () {
    return (
      <div className="Track">
  <div className="Track-information">
    <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
  </div>
  <a className="Track-action"><!-- + or - will go here --></a>
</div>
);
  }
}

export default Track;
