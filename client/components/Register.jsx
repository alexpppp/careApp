import React from 'react'
import {connect} from 'react-redux'
import {loginError, registerUserRequest} from '../actions/auth'

class Register extends React.Component {
  state = {
    username: '',
    password: '',
    confirm_password: ''
  }

  componentDidMount() {
    this.props.dispatch(loginError(''))
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    let {username, password, confirm_password} = this.state
    if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    const confirmSuccess = () => { this.props.history.push('/') }
    this.props.dispatch(registerUserRequest({username, password}, confirmSuccess))
  }

  render() {
    const {auth} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Register</h1>
        <hr />
        {auth.errorMessage && <span>{auth.errorMessage}</span>}
        <div className="form-group">
          <input required className="form-control" placeholder="Full Name (e.g. Joey Tribbiani)" type="text" name="username" autoComplete="username" onChange={this.handleChange} value={this.state.username}/>
        </div>
        <div className="form-group">
          <input required className="form-control" placeholder="Password" type="password" name="password"  autoComplete="new-password" onChange={this.handleChange} value={this.state.password}/>
        </div>
        <div className="form-group">
          <input required className="form-control" placeholder="Confirm Password" type="password" name="confirm_password" autoComplete="new-password" onChange={this.handleChange} value={this.state.confirm_password}/>
        </div>
        <input className="btn btn-primary" value="Register" type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Register)
