import React from 'react'

class Sidebar extends React.Component {
    render() {
        return (
            <>
                <div className="bg-light border-right" id="sidebar-wrapper">
                    <div className="sidebar-heading">Patients </div>
                    <div className="list-group list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action bg-light">Name1 </a>
                        <a href="#" className="list-group-item list-group-item-action bg-light">Name 2</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Sidebar