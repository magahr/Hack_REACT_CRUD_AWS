import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'

const Routes = () => {
    return (
       <Router>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <Link to "/">Inicio</Link>
                </div>
            </nav>
       </Router>
    )
}

export default Routes;