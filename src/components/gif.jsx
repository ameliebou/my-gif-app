import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.focusedGif(this.props.id);
  }

  render() {
    const gif_src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={gif_src} alt="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
