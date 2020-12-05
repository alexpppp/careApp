import React from 'react'
import Profile from './Profile'
import Notes from './Notes'

class Main extends React.Component {
    render() {
        return (
            <>
            <div id="page-content-wrapper">
                <div id="page-content-inner" className="d-flex flex-column">
                    <div id="patient-header" className="d-flex flex-row">
                        <div className="p-2">
                            <img alt="" src="#" className="rounded-circle"/>
                        </div>
                        <div className="p-2">
                            <h1 className="mt-4">Brendon Rogers</h1>
                            <h4 className="text-muted">Brendo</h4>
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
            </div>
            </>
        )
    }
}

export default Main