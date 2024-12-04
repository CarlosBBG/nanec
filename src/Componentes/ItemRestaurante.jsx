import React from 'react';
import { Link } from 'react-router-dom';

const ItemRestaurante =  ({id, nombre, tipo, horario, imagen}) => {
    
        //const{nombre, tipo, horario, imagen}=props;
        return (
            <div className="card">
                <h3>{nombre}</h3>
                <p>{"Tipo de comida: " + tipo}</p>
                <p>{"Horario: " + horario}</p>
                <img src={imagen} alt="" />
                <Link to={`/restaurantes/${id}`}>Detalle</Link>
            </div>
        );
}

export default ItemRestaurante;
