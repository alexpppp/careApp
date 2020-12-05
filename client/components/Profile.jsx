import React from 'react'

class Profile extends React.Component {
    render() {
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
                        <td className="font-weight-bold text-right">9 March, 1940</td>
                        </tr>
                        <tr>
                        <td className="text-muted">Age</td>
                        <td className="font-weight-bold text-right">80 years old</td>
                        </tr>
                        <tr>
                        <td className="text-muted">Gender</td>
                        <td className="font-weight-bold text-right">Male</td>
                        </tr>
                        <tr>
                        <td className="text-muted">Unit No.</td>
                        <td className="font-weight-bold text-right">237</td>
                        </tr>
                        <tr>
                        <td className="text-muted">Phone</td>
                        <td className="font-weight-bold text-right">555-1235422</td>
                        </tr>
                    </tbody>
                </table>
                <form action="" method="post" name="login">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName"  className="form-control my-input" id="firstName" placeholder="Title"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName"  className="form-control my-input" id="lastName" placeholder="Title"/>
                            </div>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="nickName">Nickname</label>
                                <input type="text" name="nickName"  className="form-control my-input" id="nickName" placeholder="Title"/>
                            </div>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="name">Date of birth</label>
                                <input type="text" name="name"  className="form-control my-input" id="firstName" placeholder="Title"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="name">Age</label>
                                <input type="text" name="name"  className="form-control my-input" id="firstName" placeholder="Title"/>
                            </div>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="name">Gender</label>
                                <input type="text" name="name"  className="form-control my-input" id="firstName" placeholder="Title"/>
                            </div>
                        </div> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Address</label>
                        <input type="text" name="name"  className="form-control my-input" id="firstName" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Phone</label>
                        <input type="text" name="name"  className="form-control my-input" id="firstName" placeholder="Title"/>
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

export default Profile