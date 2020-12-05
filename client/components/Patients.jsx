import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'

class Patients extends React.Component {
    render() {
        return (
            <>
            <div className="d-flex bg-peachy" id="wrapper">
                <Sidebar />
                <Main />
            </div>
            </>
        )
    }
}

export default Patients