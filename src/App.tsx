// src/App.tsx

import React, { useState } from 'react';
import './App.css';
import logo from './logo.jpg';


function App() {

  return (
    <div className="App">
      <h2 className="project-title">Snoqualmie Pass Snowfall</h2>
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </div>
  );
}

export default App;