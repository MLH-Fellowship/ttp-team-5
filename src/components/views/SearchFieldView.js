import React, { Component } from "react";

class SearchFieldBar extends Component {
  constructor() {
    super();
    this.state = { playerName: '' }
  }

  onInputChange(playerName) {
    this.setState({ playerName });
    this.props.onTermChange(playerName);
  }

  render() {
    return (
      <div className="search">
        <h5>Search for a football player:</h5>
        <input 
          class="form-control" 
          type="text" 
          aria-label="Search" 
          placeholder="Cristiano Ronaldo" 
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}


export default SearchFieldBar;