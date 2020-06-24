import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {string, name, displayName, handleSubmit, error} = props

  return (
    <div className="login-signup">
      <h4 style={{marginLeft: '17px'}}>{string}</h4>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <h4>Email</h4>
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            name="email"
            placeholder="Enter email"
          />
        </div>
        <div>
          <label htmlFor="password">
            <h4>Password</h4>
          </label>
          <input
            name="password"
            type="password"
            className="form-control form-control-lg"
            placeholder="Password"
          />
        </div>
        <div>
          <button className="btn btn-secondary btn-lg" type="submit">
            {displayName}
          </button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <button
        style={{marginLeft: '17px'}}
        href="/auth/google"
        type="button"
        className="btn btn-secondary btn-primary"
        disabled
      >
        {displayName} with Google{' '}
      </button>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    string: 'Login to view your favorites!',
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    string: 'Signup to add your favorites!',
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
