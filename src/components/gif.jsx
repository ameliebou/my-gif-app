import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const gif_src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={gif_src} alt="gif"/>
    );
  }
}

export default Gif;
