import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import HowItWorks from './components/HowItWorks';
import Dashboard from './components/Dashboard';
import Usuario from './components/Usuario';
import Empresa from './components/Empresa';
import Recompensas from './components/Recompensas';
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
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

        <Route path="/usuario" element={<Usuario />} />

        <Route path="/empresa" element={<Empresa />} />

        <Route path="/recompensas" element={<Recompensas />} />

      </Routes>
    </Router>
  );
};

export default App;
