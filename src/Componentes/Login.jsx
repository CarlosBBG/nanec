import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    /*const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/login', {
            email: email,
            password: password
        })
        .then(response => {
            console.log('Login successful:', response.data);
            const { email } = response.data;

            // Mostrar un mensaje de bienvenida
            alert(`Bienvenido, ${email}`);
        })
        .catch(error => {
            alert('Credenciales incorrectas. Por favor, intente de nuevo.', error.message);
        });
    };*/

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login', { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token); // Almacenar el token en localStorage
            navigate('/'); // Redirigir a la página de usuarios
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Correo:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Login;
