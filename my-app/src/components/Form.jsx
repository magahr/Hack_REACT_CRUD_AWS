import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';
import {useParams, useNavigate} from 'react-router-dom'



const Form = () => {
    const { studentId } = useParams();
    const [ student, setStudent] = useState(null);
    const navigate = useNavigate();

    useEffect ( () => {
        if (studentId) {
            // obtener ese estudiante por su id si existe
            axios.get(`http://127.0.0.1:5000/students/${studentId}`)
            .them(response => setStudent(response.data))
            .catch(error => console.error('Error al obtener estudiante', error))
        }
    }, [studentId]);
    const handleSubmit = (values) => {
        //esta es la ruta que esta en el endpoint en el flask
        if (student) {
            axios.patch(`http://127.0.0.1:5000//patch-student/${studentId}`, values) 

        }
        
    }
}

export default Form;
