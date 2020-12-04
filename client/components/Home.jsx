import React from 'react'
import {Link} from 'react-router-dom'

 
function Home() {
  return <>
    <h1 className="text-center">Welcome to CareApp!</h1>
    <hr/>
    <div className="d-flex justify-content-center">
        <Link className="btn btn-primary" to='/login'>Login</Link>
        <span className="m-2">Or</span>
        <Link className="btn btn-primary" to='/register'>Register</Link>
    </div>
  </>
}
 
export default Home