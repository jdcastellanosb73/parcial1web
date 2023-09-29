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
          <Route path="/" element={<Login usuario={usuario} setUsuario={setUsuario} />} />
          <Route path="/cafes" element={<cafes/>} />
          <Route path="/cafes/:cafeId" element={<CafeDetail datos={datos} setDatos={setDatos} 
          usuario={usuario} setUsuario={setUsuario} />} /> 
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
