// src/App.tsx

import React, { useState } from 'react';
import './App.css';
import logo from './logo.jpg';


function App() {

  return (
    <div className="App">
      <div className="banner">
        <h2 className="project-title">Snoqualmie Pass Snowfall</h2>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="container">
        
      </div>
    </div>
  );
}

export default App;