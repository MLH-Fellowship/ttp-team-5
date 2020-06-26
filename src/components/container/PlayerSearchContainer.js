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
      players: []
    }
  }
  componentDidMount() {
    this.props.fetchPlayerInfo()
  }

  handleInputChange =  (playerName) => {
    console.log("input: ", playerName)
    this.props.fetchPlayerInfo(playerName)
    this.setState({players: this.props.players});
  }

  render() {
    return (
      <div>
        <SearchFieldView onTermChange={debounce((playerName) => this.handleInputChange(playerName), 1000)} displayTitle="Search for a football player:" />
        <PlayerSearchView allPlayers={this.props.players}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  if (typeof state.playerSearch.data === 'undefined' ){
    return {
      players: []
    };
  }else{
    return {
      players: state.playerSearch.data.api.players
    }
  }
      
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayerInfo: (playerName) => dispatch(fetchPlayerInfoThunk(playerName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearchContainer)