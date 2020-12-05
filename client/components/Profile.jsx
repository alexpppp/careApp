import React from 'react'
import { connect } from "react-redux"
import { apiUpdatePatient, apiGetPatientById, apiGetAllPatients } from '../apis'
import { receivePatient, receivePatients } from '../actions'


class Profile extends React.Component {
    state = {
        editing: false,
        form: {
            img: this.props.patientDetails.img,
            firstName: this.props.patientDetails.firstName,
            lastName: this.props.patientDetails.lastName,
            nickname: this.props.patientDetails.nickname,
            birthdate: this.props.patientDetails.birthdate,
            gender: this.props.patientDetails.gender,
            address: this.props.patientDetails.address,
            phone: this.props.patientDetails.phone
        }
    }

    toggleForm = () => {
        this.setState({
            editing: !this.state.editing,
            form: {
                img: this.props.patientDetails.img,
                firstName: this.props.patientDetails.firstName,
                lastName: this.props.patientDetails.lastName,
                nickname: this.props.patientDetails.nickname,
                birthdate: this.props.patientDetails.birthdate,
                gender: this.props.patientDetails.gender,
                address: this.props.patientDetails.address,
                phone: this.props.patientDetails.phone
        }
    })
    }

    handleChange = (e) => {
        const name = e.target.name
        this.setState({form: {
            ...this.state.form,
            [name] : e.target.value}})
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const entry = this.state.form
        const id = this.props.patientDetails.id
        apiUpdatePatient(id, entry).then(() => {
            apiGetPatientById(id).then((patient) =>
                this.props.dispatch(receivePatient(patient))
            )
        })
        // Also update sidebar list
        apiGetAllPatients().then((patients) =>
          this.props.dispatch(receivePatients(patients))
        )
        this.toggleForm()
    }
    
    render() {
        const p = this.props.patientDetails

        return (
            <>
            <div className="d-flex flex-row-reverse">
                <div className="p-2">
                    <button className="float-right btn btn-theme btn-sm" onClick={() => this.toggleForm()}>{this.state.editing ? <><i className="fas fa-times"></i> Cancel</>: <><i className="fas fa-edit"></i> Update</>}</button>
                </div>
            </div> 
            {this.state.editing ?
                <form action="" method="post" name="login" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" onChange={this.handleChange}  className="form-control my-input" id="firstName" value={this.state.form.firstName}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" onChange={this.handleChange}  className="form-control my-input" id="lastName" value={this.state.form.lastName}/>
                            </div>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="nickname">Nickname</label>
                                <input type="text" name="nickname" onChange={this.handleChange}  className="form-control my-input" id="nickname" value={this.state.form.nickname}/>
                            </div>
                        </div> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="img">Image URL</label>
                        <input type="text" name="img" onChange={this.handleChange}  className="form-control my-input" id="img" value={this.state.form.img}/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="name">Date of birth</label>
                                <input type="text" name="birthdate" onChange={this.handleChange}  className="form-control my-input" id="birthdate" value={this.state.form.birthdate}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="name">Gender</label>
                                <input type="text" name="gender" onChange={this.handleChange}  className="form-control my-input" id="gender" value={this.state.form.gender}/>
                            </div>
                        </div> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Address</label>
                        <input type="text" name="address" onChange={this.handleChange}  className="form-control my-input" id="address" value={this.state.form.address}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Phone</label>
                        <input type="text" name="phone" onChange={this.handleChange} className="form-control my-input" id="phone" value={this.state.form.phone}/>
                    </div>
                    <div className="text-center ">
                        <button type="submit" className="btn btn-theme btn-block send-button tx-tfm">Save Changes</button>
                    </div>
                </form>
            :
                <table className="table table-hover">
                    <tbody>
                        <tr>
                        <td className="text-muted">Date of birth</td>
                        <td className="font-weight-bold text-right">{p.birthdate}</td>
                        </tr>
                        <tr>
                        <td className="text-muted">Gender</td>
                        <td className="font-weight-bold text-right">{p.gender}</td>
                        </tr>
                        <tr>
                        <td className="text-muted">Address</td>
                        <td className="font-weight-bold text-right">{p.address}</td>
                        </tr>
                        <tr>
                        <td className="text-muted">Phone</td>
                        <td className="font-weight-bold text-right">{p.phone}</td>
                        </tr>
                    </tbody>
                </table>
            }
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return { patientDetails: globalState.patientDetails }
}

export default connect(mapStateToProps)(Profile)