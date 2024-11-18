import React from 'react'
import { User } from './User';

const Home = () => {
    return (
        <div className="container mt-2 text-center">
            <h1>Bienvenido a la Página de Principal</h1>
            <p>Esta es la Página de Inicio</p>
            <User/>
        </div>
    )
}

export default Home;