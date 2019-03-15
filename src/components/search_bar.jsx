import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
  }

  handleChange = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
    );
  }
}

export default SearchBar;
