import React, { Component } from 'react'
import PlayerSearchView from '../views/PlayerSearchView'
import {connect} from 'react-redux'
import { fetchPlayerInfoThunk } from '../../thunks'


class PlayerSearchContainer extends Component {
  componentDidMount() {
    this.props.fetchPlayerInfo()
    console.log('componentDidMount')
  }

  render() {
    return (
      <div>
        <PlayerSearchView allPlayers={this.props.allPlayers}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log({state})
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayerInfo: () => dispatch(fetchPlayerInfoThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearchContainer)