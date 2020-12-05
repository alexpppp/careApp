import React from 'react'
import { connect } from "react-redux"

class Profile extends React.Component {
    render() {
        const p = this.props.patientDetails

        return (
            <>
            <div className="d-flex flex-row-reverse">
                <div className="p-2">
                    <button className="float-right btn btn-theme btn-sm"><i className="fas fa-edit"></i> Update</button>
                </div>
            </div>    
            <div className="mt-1">
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
                <form action="" method="post" name="login">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName"  className="form-control my-input" id="firstName" placeholder={p.firstName}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName"  className="form-control my-input" id="lastName" placeholder={p.lastName}/>
                            </div>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="nickName">Nickname</label>
                                <input type="text" name="nickName"  className="form-control my-input" id="nickName" placeholder={p.nickName}/>
                            </div>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="name">Date of birth</label>
                                <input type="text" name="birthdate"  className="form-control my-input" id="birthdate" placeholder={p.birthdate}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="name">Gender</label>
                                <input type="text" name="gender"  className="form-control my-input" id="gender" placeholder={p.gender}/>
                            </div>
                        </div> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Address</label>
                        <input type="text" name="address"  className="form-control my-input" id="address" placeholder={p.address}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Phone</label>
                        <input type="text" name="phone"  className="form-control my-input" id="phone" placeholder={p.phone}/>
                    </div>
                    <div className="text-center ">
                        <button type="submit" className="btn btn-theme btn-block send-button tx-tfm">Save Changes</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return { patientDetails: globalState.patientDetails }
}

export default connect(mapStateToProps)(Profile)