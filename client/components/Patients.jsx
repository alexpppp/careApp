import React from 'react'
import Sidebar from './Sidebar'

class Patients extends React.Component {
    render() {
        return (
            <>
                <div className="d-flex" id="wrapper">
                    <Sidebar />
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="mt-4">Main</h1>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Patients