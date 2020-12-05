import React from 'react'
import { connect } from "react-redux";
import { apiGetAllPatients } from '../apis'
import { receivePatients } from '../actions'

class Sidebar extends React.Component {
    componentDidMount() {
        apiGetAllPatients().then((patients) =>
          this.props.dispatch(receivePatients(patients))
        );
      }
    render() {
        return (
            <>
            <div id="sidebar-wrapper">
                <div id="logo">
                <i className="fas fa-universal-access fa-2x"></i>
                </div>
                <div className="sidebar-heading">
                    <h2 id="sidebar-title">Patients</h2><button className="float-right btn btn-theme btn-sm btn-circle"><i className="fas fa-plus"></i></button>
                </div>
                <form>
                    <input className="form-control form-control-borderless" style={{fontFamily: "Arial, FontAwesome"}} type="search" placeholder="&#xF002; Search"/>
                </form>
                <div className="sidebar-inner list-group">
                    <a href="#" className="list-group-item bg-peachy"><img alt="" src="#" className="rounded-circle"/> Name LastName</a>
                </div>
            </div>
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return { auth: globalState.auth, patients: globalState.patients };
  }
  
  export default connect(mapStateToProps)(Sidebar);