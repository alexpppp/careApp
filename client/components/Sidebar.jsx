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
    fetchPatient = (id) => {
        console.log("fetch")
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
                {this.props.patients.map((p) => {
                    return (
                        <div key={p.id}>
                            <a href="#" onClick={() => this.fetchPatient(p.id)} className="list-group-item bg-peachy"><img alt={p.nickname} src={p.img} className="rounded-circle"/> {p.firstName} {p.lastName}</a>
                        </div>
                    );
                })}
                </div>
            </div>
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return { patients: globalState.patients };
  }
  
  export default connect(mapStateToProps)(Sidebar);