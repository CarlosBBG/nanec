
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AgregarRestaurante = (props) => {

    const[datosFormRestaurante, setDatosFormRestaurante] = useState ({
        id: "",
        nombre: "",
        tipo: "",
        horario: "",
        imagen: "",
        reputacion: ""
    })

    const {onAgregarRestaurante} = props;

    const navigate = useNavigate();


    const handleAgregarRestaurante = (e) => {
        e.preventDefault();
        //console.log(e.target);
        const {name, value} = e.target;
        setDatosFormRestaurante({...datosFormRestaurante, [name]: value});
    }

    const handleSubmitRestaurante = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            console.log('No token found, please login first');
            //Aquí podrían cambiar una variable de estado de tipo error
            return;
        }
        axios.post("http://localhost:8000/restaurantes", datosFormRestaurante, {
            headers:{
              Authorization: `Bearer ${token}`
            }
          })
            .then(res => {
                console.log("Insercion existosa", res);
                navigate("/");
                //onAgregarRestaurante(datosFormRestaurante);
                
            })
            .catch(err => {
                console.log("Insercion fallida", datosFormRestaurante);
                alert("No se pudo agregar el restaurante");
            });
    }


    return (
        <div className="card">
            <h2>Agregar Restaurante</h2>
            <form onSubmit={handleSubmitRestaurante}>
                <div>
                    <label>Id: </label>
                    <input type="text" id="id" name="id" value={datosFormRestaurante.id} onChange={handleAgregarRestaurante}/>
                </div>
                <div>
                    <label>Nombre: </label>
                    <input type="text" id="nombre" name="nombre" value={datosFormRestaurante.nombre} onChange={handleAgregarRestaurante}/>
                </div>
                <label>Tipo de Comida: </label>
                <input type="text" id="tipo" name="tipo" value={datosFormRestaurante.tipo} onChange={handleAgregarRestaurante}/>
                <div>
                    <label>Horario: </label>
                    <input type="text" id="horario" name="horario" value={datosFormRestaurante.horario} onChange={handleAgregarRestaurante}/>
                </div>
                <div>
                    <label>Imagen: </label>
                    <input type="text" id="imagen" name="imagen" value={datosFormRestaurante.imagen} onChange={handleAgregarRestaurante}/>
                </div>

                <div>
                    <label>Reputación: </label>
                    <input type="text" id="reputacion" name="reputacion" value={datosFormRestaurante.reputacion} onChange={handleAgregarRestaurante}/>
                </div>
                <button>Agregar</button>
            </form>
                
        </div>
    );
}

export default AgregarRestaurante;