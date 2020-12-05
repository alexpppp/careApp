import React from 'react'
import { connect } from "react-redux"

class Notes extends React.Component {
    render() {
        return (
            <>
            <div id="notes-inner">
                <div className="mx-auto">
                    <form action="" method="post" name="login">
                        <div className="form-group">
                            <input type="text" name="name"  className="form-control my-input" id="name" placeholder="Title"/>
                        </div>
                        <div className="form-group">
                            <textarea type="number" min="0" name="phone" id="phone"  className="form-control my-input" rows="3" placeholder="Note"></textarea>
                        </div>
                        <div className="text-center ">
                            <button type="submit" className="btn btn-theme btn-block send-button tx-tfm">Add Note</button>
                        </div>
                    </form>
                    <hr className="hr-or" />
                </div>
                <div className="d-flex flex-column">
                    {this.props.patientDetails.notes && this.props.patientDetails.notes.map((note) => {
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
    return { patientDetails: globalState.patientDetails }
}

export default connect(mapStateToProps)(Notes)