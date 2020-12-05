import React from 'react'
import { connect } from "react-redux"
import Profile from './Profile'
import Notes from './Notes'
import { apiAddPatient, apiGetPatientById, apiGetAllPatients } from '../apis'
import { receivePatient, receivePatients } from '../actions'

class Main extends React.Component {
    state = {
        img: '',
        firstName: '',
        lastName: '',
        nickname: '',
        birthdate: '',
        gender: '',
        address: '',
        phone: ''
    }

    handleChange = (e) => {
        const name = e.target.name
        this.setState({[name]: e.target.value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const entry = this.state
        apiAddPatient(entry).then(id => {
            apiGetPatientById(id).then((patient) =>
                this.props.dispatch(receivePatient(patient)))
            })
        // Also update sidebar list
        apiGetAllPatients().then((patients) =>
          this.props.dispatch(receivePatients(patients))
        )
    }

    render() {
        const p = this.props.patientDetails
        return (
            <>
            <div id="page-content-wrapper">
                <div id="page-content-inner" className="d-flex flex-column">
                    {Object.keys(p).length === 0 ?
                    <div className="row m-3">
                        <div className="col-md-8">
                        <h1>Add a Patient</h1>
                        <hr />
                        <form action="" method="post" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text" name="firstName" onChange={this.handleChange}  className="form-control my-input" id="firstName" placeholder="First Name"/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text" name="lastName" onChange={this.handleChange}  className="form-control my-input" id="lastName" placeholder="Last Name"/>
                                    </div>
                                </div> 
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="nickname" onChange={this.handleChange}  className="form-control my-input" id="nickname" placeholder="Nickname"/>
                                    </div>
                                </div> 
                            </div>
                            <div className="form-group">
                                <input type="text" name="img" onChange={this.handleChange}  className="form-control my-input" id="img" placeholder="Image URL"/>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text" name="birthdate" onChange={this.handleChange}  className="form-control my-input" id="birthdate" placeholder="Date of birth"/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text" name="gender" onChange={this.handleChange}  className="form-control my-input" id="gender" placeholder="Gender"/>
                                    </div>
                                </div> 
                            </div>
                            <div className="form-group">
                                <input type="text" name="address" onChange={this.handleChange}  className="form-control my-input" id="address" placeholder="Address"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="phone" onChange={this.handleChange}  className="form-control my-input" id="phone" placeholder="Phone"/>
                            </div>
                            <div className="text-center ">
                                <button type="submit" className="btn btn-theme btn-block send-button tx-tfm">Save Changes</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    : 
                    <div>
                        <div id="patient-header" className="d-flex flex-row">
                            <div className="p-2">
                                <img alt={p.nickname} src={p.img} className="rounded-circle"/>
                            </div>
                            <div className="p-2">
                                <h1 className="mt-4">{p.firstName} {p.lastName}</h1>
                                <h4 className="text-muted">{p.nickname}</h4>
                            </div>
                        </div>
                        <div id="patient-body" className="col-md-8 p-2">
                            <ul className="nav nav-tabs mt-2 mb-5" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="notes-tab" data-toggle="tab" href="#notes" role="tab" aria-controls="notes" aria-selected="false">Notes</a>
                            </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <Profile />
                                </div>
                                <div className="tab-pane fade" id="notes" role="tabpanel" aria-labelledby="notes-tab">
                                    <Notes />
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return { patientDetails: globalState.patientDetails }
}

export default connect(mapStateToProps)(Main)