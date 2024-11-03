import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Form from './Form';

const App2 = () => {
   
    return (
       <Router>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <Link className='navbar-brank' to = "/home">Inicio</Link>
                    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navba">
                        <span className='"navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/form'>Formulario</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/home' element={<Home />} />        *// Ruta por defecto, muestra Home
                <Route path='/form' element={<Form />} />    *// Ruta para el formulario
            </Routes> 
       </Router>
    )
}

export default App2;

/*
<ul className='navbar-nav'>
    <li className='nav-item'>
        <Link className='nav-link' to='/form'>Formulario</Link>
    </li>
</ul>
*/