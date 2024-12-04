import React, { useEffect } from 'react';
import ItemRestaurante from './ItemRestaurante';
import 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

function ListaRestaurantes({ restaurantes, onRecargar }) {

  const navigate = useNavigate();

  useEffect(() => {
    onRecargar();
  }, [onRecargar]);

  return (
    <div>
      <button onClick={() => navigate('/Form')}>Agregar</button>
      <Link to="/Form">Nuevo</Link>
      {restaurantes.map((rest, index) => (
        <ItemRestaurante 
          key={index}
          id={rest.id}
          nombre={rest.nombre}
          tipo={rest.tipo}
          horario={rest.horario}
          imagen={rest.imagen}
        />
      ))}
    </div>
  );
}

export default ListaRestaurantes;
