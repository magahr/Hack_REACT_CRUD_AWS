import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        //destructuracion de objetos
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]:value

        })
      
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Los valores del formulario son:', formData)
    };
    return (
        <div className='container mt-4'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Direccion de Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp"
                    value={formData.email}
                    onChange={handleChange}
                    />

                    <div id="emailHelp" className="form-text">Nunca compartiremos su email con alguien más.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password"
                    value={formData.password}
                    onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default Form;