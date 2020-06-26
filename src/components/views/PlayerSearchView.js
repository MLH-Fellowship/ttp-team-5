import React, { Component } from 'react'
import SearchFieldView from './SearchFieldView'
import {connect} from 'react-redux'
import { fetchPlayerInfoThunk } from '../../thunks'

class PlayerSearchView extends Component {

  constructor() {
    super();
    this.state = {
      player: []
    }
  }

  componentDidMount() {
    this.props.fetchPlayerInfo()
    console.log('componentDidMount')
  }

  render() {
    return (
      <div>
        <SearchFieldView onChange={this.onChange} onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log({state})
  return {
    player: state.player
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayerInfo: (player) => dispatch(fetchPlayerInfoThunk(player))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearchView)