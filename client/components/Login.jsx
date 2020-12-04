import React from 'react'
import {connect} from 'react-redux'
import {loginUser, loginError} from '../actions/auth'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let {username, password} = this.state
    const confirmSuccess = () => { this.props.history.push('/') }
    this.props.dispatch(loginUser({username, password}, confirmSuccess))
  }
  render() {
    const {auth} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <hr />
        {auth.errorMessage && <span>{auth.errorMessage}</span>}
        <div className="form-group">
          <input required className="form-control" placeholder="User Name" type="text" name="username" autoComplete="username" value={this.state.username} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <input required className="form-control" placeholder="Password" type="password" name="password" autoComplete="current-password" value={this.state.password} onChange={this.handleChange}/>
        </div>
        <input className="btn btn-primary" value='Login' type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Login)
