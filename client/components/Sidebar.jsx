import React from 'react'
import { connect } from "react-redux";
import { apiGetAllPatients, apiGetPatientById } from '../apis'
import { receivePatients, receivePatient } from '../actions'

class Sidebar extends React.Component {
    componentDidMount() {
        apiGetAllPatients().then((patients) =>
          this.props.dispatch(receivePatients(patients))
        );
      }
    fetchPatient = (id) => {
        apiGetPatientById(id).then((patient) =>
          this.props.dispatch(receivePatient(patient))
        );
    }
    clearPatientDetails = () => {
        const patient = {}
        this.props.dispatch(receivePatient(patient))
    }
    render() {
        return (
            <>
            <div id="sidebar-wrapper">
                <div id="logo">
                <i className="fas fa-universal-access fa-2x"></i>
                </div>
                <div className="sidebar-heading">
                    <h2 id="sidebar-title">Patients</h2><a href="#" onClick={() => this.clearPatientDetails()} className="float-right btn btn-theme btn-sm btn-circle"><i className="fas fa-plus"></i></a>
                </div>
                <form>
                    <input className="form-control form-control-borderless" style={{fontFamily: "Arial, FontAwesome"}} type="search" placeholder="&#xF002; Search"/>
                </form>
                <div className="sidebar-inner list-group">
                {[...this.props.patients].reverse().map((p) => {
                    return (
                        <div key={p.id}>
                            <a href="#" onClick={() => this.fetchPatient(p.id)} className="list-group-item bg-peachy"><img alt={p.nickname} src={p.img} className="rounded-circle"/><span>{p.firstName} {p.lastName}</span></a>
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
    return { patients: globalState.patients }
}

export default connect(mapStateToProps)(Sidebar)