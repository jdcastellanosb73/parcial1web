import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CafeDetail from './components/CafeDetail';
import Login from './components/Login';




function App() {
  return ( 
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/cafes" element={<CafeDetail />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
