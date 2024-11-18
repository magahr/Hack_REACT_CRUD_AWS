// esto es de gemini
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';

export function User() {
  //const [users, setUsers] = useState([]);
  const [usersBack, setUsersBack] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

    useEffect(() => {
            const fetchUser = async () => {
            try {
                //const response = await axios.get("https://jsonplaceholder.typicode.com/users");   
                const usuarios = await axios.get("http://127.0.0.1:5000/students");   
                console.log(`Usuarios de mi Backend`, usuarios)
                //setUsers(response.data);
                setUsersBack(usuarios.data);
            } catch (error) {
                // Manejo de errores (aquí puedes personalizar los mensajes de error)
                setError('Ocurrió un error al obtener los datos');
            } finally {
                setLoading(false);
            }
            };

            fetchUser();
        }, []); // Arreglo de dependencias vacío: se ejecuta una vez

        const handleDelete = async (user) => {
            if (window.confirm('Quieres borrar este usuario')) {
                try {
                    axios.delete(`http://127.0.0.1:5000/delete-student/?name=${user.name}`)
                    setUsersBack(usersBack.filter(u => u.id !== user.id))
                } catch (error) {
                    console.error ('Error al eliminar el estudiante', error);
                    alert('Error al eliminar el estudiante')
                }

            }

        }



  if (loading) return <div>Cargando...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <ul>
       {/*users.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))*/}
      {usersBack.map(user => (
        <li key={user.id}>
            {user.name} - {user.major} - {user.age}
            <Link to={`/form/${user.id}`}>
            <button>Editar</button>
            </Link>
            <button onClick={() =>  handleDelete(user)}>Eliminar</button>




        </li>
      ))}
    </ul>
  );
}
















/* desde aqui
import React, {useEffect, useState} from "react";
import axios from 'axios'


export function User() {
    const [users, serUsers] = useState([]);
    const {loading, setLoading} = useState(false);
    const {error, setError} = useState(null);

    useEffect( () => {
       const fetchUser = async () => {
            try {
                    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                    serUsers(response.data);
                } catch (error) {
                    if (error.response){
                        if (error.response.status === 404) {
                            setError('El servidor no pudo encontrar el contenido solicitado')
                        } else {
                            setError('Error en la respuesta del servidor')
                        }
                    }else if (error.request) {
                        setError('No se recibio respuesta del servidor')
                    }else{
                        setError('Error: ' + error.message)
                    }
              } finally {
                        setLoading(false);
                    }
            }
            fetchUser();
    //}, [] ); aqui hay un warning que no se que es.... todo esto fue hecho con el vido 39
    },[setError, setLoading]);
     hasta aqui */
/*, [] video 39 minuto 46:31*/

/*desde aqui 

    if (loading) return <div>Cargando...</div>
    if (error) return <div>Error: {error}</div>
    return (
        <ul>
            {users.map( user => (
                <li key={user.id} >
                    {user.name} -{user.email}
                </li>
            )) }
        </ul>
    );
  }

hasta aqui */