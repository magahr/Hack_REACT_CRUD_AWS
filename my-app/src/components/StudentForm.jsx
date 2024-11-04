import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const FormSchema = Yup.object().shape({
    name: Yup.string().required('Nombre es requerido'),
    age: Yup.number().required('Edad es requerida').positive().integer,
    major: Yup.string().required('Profesion es requerida')

})
const StudentForm = ({student, onSubmit}) => {
 
    return (
      <Formik  initialValues={{
        name: student ? student.name : '',
        edad: student ? student.edad : '',
        major: student ? student.major : '',
        }}
        validationSchema={FormSchema}
        onSubmit={onSubmit}  >
        {({ isSubmitting }) => (
            <Form>
                <div>
                    <label htmlFor='name'>Nombre</label>
                    <Field name="name" type="text"></Field>
                    <ErrorMessage name='name' component = "div"></ErrorMessage>
                </div>
                <div>
                    <label htmlFor='age'>Edad</label>
                    <Field name="age" type="number"></Field>
                    <ErrorMessage name='age' component = "div"></ErrorMessage>
                </div>
                <div>
                    <label htmlFor='major'>Edad</label>
                    <Field name="major" type="text"></Field>
                    <ErrorMessage name='major' component = "div"></ErrorMessage>
                </div>
                <button type='submit' disabled={isSubmitting}>
                    {student ? 'Actualizar Estudiante': 'Crear Estudiante'}
                </button>
            </Form>
        )}
      </Formik>   
    )
}

export default StudentForm;