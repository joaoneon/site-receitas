import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Nomes from './pages/Nomes/Nomes';
import Letras from './pages/Letras/Letras';
import Ingredientes from './pages/Ingredientes/Ingredientes';
import ReceitasPorIngrediente from './pages/PorIngrediente/ReceitasPorIngrediente';
import ReceitaPage from './pages/Receita/Receita';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nomes" element={<Nomes />} />
        <Route path="/letras" element={<Letras />} />
        <Route path="/ingredientes" element={<Ingredientes />} />
        <Route path="/ingredientes/:ingrediente" element={<ReceitasPorIngrediente />} />
        <Route path="/receita/:id" element={<ReceitaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
