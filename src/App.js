//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AgregarRestaurante from './Componentes/AgregarRestaurante';
import ListaRestaurantes from './Componentes/ListaRestaurantes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetalleRestaurante from './Componentes/DetalleRestaurante';
import EditarRestaurante from './Componentes/EditarRestaurante';
import Login from './Componentes/Login';
import Register from './Componentes/Register';

//Codigo Principal
function App() {
  /*const agregarRestaurante = () => {
    setRestaurantes(prevState => [...prevState, { nombre: "Nuevo Restaurante", tipo: "Tipo de comida", horario: "00:00 - 00:00", imagen: "" }]);
  };
  //restaurantes es la variable de estado y set restaurante es la funcion cuando se actuliza el estado
  const [restaurantes, setRestaurantes] = useState([
    { nombre: "Restaurante El Buen Sabor", tipo: "Tradicional", horario: "12:00 - 22:00", imagen:"https://s2.abcstatics.com/abc/sevilla/media/gurmesevilla/2012/01/comida-rapida-casera.jpg" },
    { nombre: "Café del Valle", tipo: "Cafetería", horario: "08:00 - 20:00", imagen:"https://s2.abcstatics.com/abc/sevilla/media/gurmesevilla/2012/01/comida-rapida-casera.jpg" },
    { nombre: "La Parrilla de San José", tipo: "Parrillada", horario: "12:00 - 23:00", imagen: "https://s2.abcstatics.com/abc/sevilla/media/gurmesevilla/2012/01/comida-rapida-casera.jpg"},
    { nombre: "Tortillas tradicionales", tipo: "Tradicinal", horario: "13:00 - 21:00", imagen: "https://s2.abcstatics.com/abc/sevilla/media/gurmesevilla/2012/01/comida-rapida-casera.jpg"}
  ]);*/


  const [restaurantes, setRestaurantes] = useState([]);

  /*const cargarRestaurante= () => {
    axios.get("http://localhost:3001/restaurantes")
    .then((response) => {console.log("Respuesta Exitosa ",response)
      setRestaurantes(response.data);
    })
    .catch((error) => {console.log("Respuesta Fallida ",error);});
  }*/

  // Función para cargar la lista de restaurantes
  const cargarRestaurantes = () => {
    axios.get("http://localhost:8000/restaurantes")
      .then((response) => {
        setRestaurantes(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los restaurantes:", error);
        alert("No se pudo cargar la lista de restaurantes.");
      });
  };

  // Cargar restaurantes cuando se monte el componente
  useEffect(() => {
    cargarRestaurantes();
  }, []);



  // cuando no tengo funcion construida puedo hacerlo de la siguiente manera
  /*useEffect(() => { 
    axios.get("http://localhost:3001/restaurantes")
    .then((response) => {console.log("Respuesta Exitosa ",response)
      setRestaurantes(response.data)}, []);});*/

  /*const agregarRestaurante = (nuevoRestaurante) => {
    setRestaurantes( (prevRestaurante) =>
      [...prevRestaurante, nuevoRestaurante]
    )
  }*/

  //Cuando visite la raiz / se muestre la lista de restaurantes
  //Cuando visite /create se muestra el form 


  return (
    <div className="App">
      <h1>Bienvenidos a ñanEC</h1>
      {/*restaurantes.map((rest, index) => (<ItemRestaurante key={index} nombre={rest.nombre} tipo={rest.tipo} horario={rest.horario} imagen={rest.imagen}></ItemRestaurante>))}
        {/*<button onClick={agregarRestaurante}>Agregar</button>
        <button onClick={cargarRestaurante}>Cargar</button>*/}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<ListaRestaurantes restaurantes={restaurantes} onRecargar={cargarRestaurantes}></ListaRestaurantes>}></Route>
          <Route path='/Form' element={<AgregarRestaurante />} />
          <Route path='/restaurantes/:id' element={<DetalleRestaurante />} />
          <Route path='/editar/:id' element={<EditarRestaurante />} />

        </Routes>
      </BrowserRouter>
      {/*<ListaRestaurantes restaurantes={restaurantes}/>}
        <AgregarRestaurante onAgregarRestaurante={agregarRestaurante} ></AgregarRestaurante>*/}
    </div>
  );

}
export default App;