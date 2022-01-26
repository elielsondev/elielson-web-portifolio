import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Portugues from './pages/Portugues';
import English from './pages/English';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Routes exact path="/portugues" element={<Portugues />} />
      <Routes exact path="/english" element={<English />} />
    </Routes>
  );
}

export default App;
