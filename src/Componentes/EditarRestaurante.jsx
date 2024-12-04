import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditarRestaurante = () => {
    const [restaurante, setRestaurante] = useState({
        nombre: "",
        tipo: "",
        horario: "",
        imagen: ""
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/restaurantes/${id}`)
            .then((response) => {
                setRestaurante(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener el restaurante:", error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRestaurante((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:3001/restaurantes/${id}`, restaurante)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.error("Error al actualizar el restaurante:", error);
            });
    };

    return (
        <div>
            <h2>Editar Restaurante</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre: </label>
                    <input
                        type="text"
                        name="nombre"
                        value={restaurante.nombre}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Tipo de Comida: </label>
                    <input
                        type="text"
                        name="tipo"
                        value={restaurante.tipo}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Horario: </label>
                    <input
                        type="text"
                        name="horario"
                        value={restaurante.horario}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Imagen (URL): </label>
                    <input
                        type="text"
                        name="imagen"
                        value={restaurante.imagen}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default EditarRestaurante;
