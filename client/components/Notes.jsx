import React from 'react'

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
                    <div className="card m-3">
                        <div className="card-body">
                            <h5 className="card-title">Vascular arrythmia reported</h5>
                            <h6 className="card-subtitle mb-2 text-muted">10 Dec 2020 | Dr A. Procter</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card m-3">
                        <div className="card-body">
                            <h5 className="card-title">Vascular arrythmia reported</h5>
                            <h6 className="card-subtitle mb-2 text-muted">10 Dec 2020 | Dr A. Procter</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card m-3">
                        <div className="card-body">
                            <h5 className="card-title">Vascular arrythmia reported</h5>
                            <h6 className="card-subtitle mb-2 text-muted">10 Dec 2020 | Dr A. Procter</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Notes