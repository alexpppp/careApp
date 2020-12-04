import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Patients from './Patients'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import { checkAuth } from '../actions/auth'

export class App extends React.Component {
  componentDidMount() {
    const confirmSuccess = () => { }
    this.props.dispatch(checkAuth(confirmSuccess))
  }

  render() {
    const {auth} = this.props
    return (
      <Router>
            {auth.isAuthenticated && (
              <>
                <Route exact path="/" component={Patients} />
              </>
            )}
            {!auth.isAuthenticated && (
              <>
                <div className="m-3">
                    <Link className="mt3" to='/'>Home</Link>
                </div>
                <div className="container has-text-centered">
                  <div className="row justify-content-md-center">
                    <div className="col-md-6">
                      <Route exact path="/" component={Home} />
                      <Route path="/login" component={Login} />
                      <Route path="/register" component={Register} />
                    </div>
                  </div>
                </div>
              </>
            )}
      </Router>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
