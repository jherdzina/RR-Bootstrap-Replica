import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar'
import Background from './components/Background';
import StoreListing from './components/StoreListing';

function App() {
  return (
    <header>
    
      <TopBar/>
      <div className="App">
        <Background/>
      </div>
      <StoreListing/>
    </header>
    
  );
}

export default App;
