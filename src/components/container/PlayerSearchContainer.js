import React, { Component } from 'react'
import PlayerSearchView from '../views/PlayerSearchView'
import SearchFieldView from '../views/SearchFieldView'
import {connect} from 'react-redux'
import { fetchPlayerInfoThunk } from '../../thunks'
import axios from "axios"


class PlayerSearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      position: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

  }
  // componentDidMount() {
  //   // this.props.fetchPlayerInfo()
  // }

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value}, () => {
      console.log("state of football", this.state);
    });
  }

  handleSubmit(event, playerName) {
    console.log("handle submit")
    event.preventDefault();
    axios
      .get(
        `https://api-football-v1.p.rapidapi.com/v2/players/search/${playerName}`
      )
      .then((res) => res.data)
      .then((currentPlayer) => {
        this.setState({ currentPlayer: currentPlayer });
        console.log("currentPlayer on App State", currentPlayer);
      })
      .catch((err) => console.log(err));
  }

  handleCancel(event) {
    this.setState({firstname: null, lastname: null});
  }

  render() {
    console.log("name", this.state.firstname)
    return (
    <div>
      <form onSubmit={(event) => this.handleSubmit(event, this.state.firstname, this.state.lastname, this.state.position)}>
        <h4>Soccer Player Name:</h4>
        <input 
          type="text"           
          class="form-control" 
          aria-label="Search" 
          placeholder="Cristiano Ronaldo"  
          onChange={this.handleInputChange} 
          />
        <button type="button" className="btn btn-secondary btn-sm" onClick={this.props.handleSubmit}>Submit</button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={this.handleCancel}>Cancel</button>
      </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log({state})
  return {
    firstname: null,
    lastname: null,
    position: null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchPlayerInfo: (playerName) => dispatch(fetchPlayerInfoThunk(playerName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearchContainer)