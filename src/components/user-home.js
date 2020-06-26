import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import PlayerSearchContainer from './container/PlayerSearchContainer'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Welcome, {email}</h3>
      <PlayerSearchContainer />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
