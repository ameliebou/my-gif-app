import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      focusedGifId: "84ZzhsJZWlE3e"
    }
  }

  search = (query) => {
    giphy('gj7sJasGR0wegEEnwg1LIBbWkOpTIvuv').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({gifs: res.data})
    });
  }

  render() {
    return (
      <div className="window">
        <div className="left-scene">
          <div className="search-bar">
            <SearchBar search={this.search} />
          </div>
          <div className="focused-gif">
            <Gif id={this.state.focusedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
