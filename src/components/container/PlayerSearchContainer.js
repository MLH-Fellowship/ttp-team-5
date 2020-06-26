import React, { Component } from 'react'
import PlayerSearchView from '../views/PlayerSearchView'
import SearchFieldView from '../views/SearchFieldView'
import {connect} from 'react-redux'
import { debounce } from "lodash";
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
  componentDidMount() {
    // this.props.fetchPlayerInfo()
  }

  handleInputChange =  playerName => {
    console.log("input: ", playerName)
    this.props.fetchPlayerInfo(playerName)
  }

  render() {
    console.log("name", this.state.firstname)
    return (
      <div>
        <SearchFieldView onTermChange={debounce((playerName) => this.handleInputChange(playerName), 1000)}/>
        {/* <PlayerSearchView allPlayers={this.props.allPlayers}/> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("state: ", state)
  return {
    firstname: "",
    lastname: "",
    position: ""
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayerInfo: (playerName) => dispatch(fetchPlayerInfoThunk(playerName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearchContainer)