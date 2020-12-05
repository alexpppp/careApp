import React from 'react'
import { connect } from "react-redux"
import { apiAddNote, apiGetPatientById } from '../apis'
import { receivePatient } from '../actions'

class Notes extends React.Component {
    state = {
        title: '',
        content: '',
    }

    handleChange = (e) => {
        const name = e.target.name
        this.setState({[name]: e.target.value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const entry = {...this.state,
            authorId: this.props.auth.user.id,
            patientId: this.props.patientDetails.id
        }
        const id = this.props.patientDetails.id
        apiAddNote(entry).then(() => {
            apiGetPatientById(id).then((patient) =>
                this.props.dispatch(receivePatient(patient)))
            })
        this.setState({ 
            title: '',
            content: '',
         })
    }

    render() {
        return (
            <>
            <div id="notes-inner">
                <div className="mx-auto">
                    <form action="" method="post" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="title" onChange={this.handleChange}  className="form-control my-input" id="title" value={this.state.title} placeholder="Title"/>
                        </div>
                        <div className="form-group">
                            <textarea type="text" min="0" name="content" onChange={this.handleChange} id="content"  className="form-control my-input" rows="3" value={this.state.content} placeholder="Note"></textarea>
                        </div>
                        <div className="text-center ">
                            <button type="submit" className="btn btn-theme btn-block send-button tx-tfm">Add Note</button>
                        </div>
                    </form>
                    <hr className="hr-or" />
                </div>
                <div className="d-flex flex-column">
                    {this.props.patientDetails.notes && [...this.props.patientDetails.notes].reverse().map((note) => {
                        return (
                            <div key={note.id} className="card m-3">
                                <div className="card-body">
                                    <h5 className="card-title">{note.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{note.date} | Dr {note.author}</h6>
                                    <p className="card-text">{note.content}</p>
                                </div>
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
    return { auth: globalState.auth,
        patientDetails: globalState.patientDetails }
}

export default connect(mapStateToProps)(Notes)