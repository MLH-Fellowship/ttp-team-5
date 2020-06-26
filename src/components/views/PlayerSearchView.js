import React, { Component } from 'react'
import SearchFieldView from './SearchFieldView'

class PlayerSearchView extends Component {
  render() {
    return (
      <div>
        <SearchFieldView onChange={this.onChange} onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

export default PlayerSearchView
