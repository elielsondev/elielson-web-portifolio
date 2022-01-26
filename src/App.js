import React from 'react';
import { Routes, Route } from 'react-router-dom';
import English from './pages/English';
import Login from './pages/Login';
import Portuguese from './pages/Portuguese';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="portugues" element={<Portuguese />} />
      <Route path="english" element={<English />} />
    </Routes>
  );
}

export default App;
