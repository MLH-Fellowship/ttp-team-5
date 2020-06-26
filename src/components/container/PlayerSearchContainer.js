import React, { Component } from 'react'
import PlayerSearchView from '../views/PlayerSearchView'
import SearchFieldView from '../views/SearchFieldView'
import {connect} from 'react-redux'
import { fetchPlayerInfoThunk } from '../../thunks'


class PlayerSearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      position: ""
    }
  }
  // componentDidMount() {
  //   // this.props.fetchPlayerInfo()
  // }

  handleInputChange =  event => {
    console.log("event", event)
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event =>{
    console.log("submit")
  }

  render() {
    console.log("name", this.state.firstname)
    return (
      <div>
        <SearchFieldView onChange={this.handleInputChange} onSubmit={this.handleSubmit}/>
        {/* <PlayerSearchView allPlayers={this.props.allPlayers}/> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log({state})
  return {
    firstname: "",
    lastname: "",
    position: ""
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchPlayerInfo: (playerName) => dispatch(fetchPlayerInfoThunk(playerName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearchContainer)