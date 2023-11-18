import React from 'react';

import Menu from './componentes/menu/menu';

import Home from './pages/home';
import Produtos from './pages/produtos';
import About from './pages/sobre';

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

export default App;

