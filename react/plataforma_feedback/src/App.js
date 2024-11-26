import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import HowItWorks from './components/HowItWorks';
import Dashboard from './components/Dashboard';
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <HowItWorks />

    </div>
  );
}

export default App;

