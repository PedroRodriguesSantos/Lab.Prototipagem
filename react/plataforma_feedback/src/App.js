import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import HowItWorks from './components/HowItWorks';
import Dashboard from './components/Dashboard';
import Usuario from './components/Usuario';
import Recompensas from './components/Recompensas';
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Página de Welcome */}
        <Route
          path="/"
          element={
            <div>
              <Welcome />
              <HowItWorks />
              <Dashboard />
            </div>
          }
        />

        {/* Página de Como Funciona */}
        <Route path="/usuario" element={<Usuario />} />

        {/* Página de Dashboard */}
        <Route path="/recompensas" element={<Recompensas />} />

      </Routes>
    </Router>
  );
};

export default App;
