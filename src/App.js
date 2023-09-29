import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Cafes from './components/Cafes';
import CafeDetail from './components/CafeDetail';
import { useState } from 'react';

function App() {
  const [datos, setDatos] = useState();
  const [usuario, setUsuario] = useState("{}");
  return (
    //inicio de la pagina
    <div className='App' style={{backgroundColor:'white', width:'100%', height:'100%', minHeight:'100vh', margin:'auto'}}>
      <BrowserRouter>
        <Routes> 
          //ruta para iniciar sesión. 
          <Route path="/" element={<Login usuario={usuario} setUsuario={setUsuario} />} />
          //ruta para mostrar los elementos del carro.
          <Route path="/articulos" element={<Articulos/>} />
          //ruta para mostar dentro de cada carro los datos.
          <Route path="/articulos/:articuloId" element={<ArticuloDetail datos={datos} setDatos={setDatos} 
          //comprobacion de usuario.
          usuario={usuario} setUsuario={setUsuario} />} /> 
          //ruta que lleva al elemento. 
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
