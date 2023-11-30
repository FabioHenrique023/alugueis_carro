import React from 'react';

import Menu from './componentes/menu/menu';

import Home from './pages/home';
import Produtos from './pages/produtos';
import About from './pages/sobre';
import Admin from './pages/administrador';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="about" element={<About />} />
      </Routes>
     </div>
  );
}

//Rota para administrador
const Administrador = () => {
  return <Admin />;
};

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Administrador />} />
    </Routes>
  );
};

// Atribuir a função a uma variável antes de exportar
const DefaultExport = () => (
  <Routes>
    <Route path="/*" element={<App />} />
    <Route path="/admin/*" element={<AdminRoute />} />
  </Routes>
);

export default DefaultExport;

