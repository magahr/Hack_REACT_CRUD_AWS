import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
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
//     return (
        
//     );
// }

export default Form;