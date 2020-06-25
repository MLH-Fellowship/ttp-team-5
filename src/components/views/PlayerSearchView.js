import React, { Component } from 'react'
import SearchFieldView from './SearchFieldView'
import {connect} from 'react-redux'
import { fetchPlayerInfoThunk } from '../../thunks'

class PlayerSearchView extends Component {
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
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayerInfo: () => dispatch(fetchPlayerInfoThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearchView)