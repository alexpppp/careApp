import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { logoutUser } from "../actions/auth";

class Nav extends React.Component {
  back = () => {
    return <Redirect to="/" />
  }
  render() {
    const { auth, logout } = this.props;
    return (
        <>
            {auth.isAuthenticated && <Link to='/' className="m-2 float-right" onClick={() => logout()}>Logout</Link>}
        </>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      const confirmSuccess = () => ownProps.history.push("/");
      dispatch(logoutUser(confirmSuccess));
    },
  };
};

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
