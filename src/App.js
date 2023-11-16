import Menu from './componentes/menu/menu';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/home';
import Produtos from './componentes/produtos';
import Sobre from './componentes/sobre';

function App() {
  return (
     <Menu></Menu>
  );
}

export default App;

