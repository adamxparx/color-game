import logo from './logo.svg';
import './App.css';
import BasicGrid, { ArrayGrid } from './Components/Grid';
import { useState } from 'react';

function App() {

  const colorArr = ["pink", "blue", "red", "yellow", "orange", "purple", "cyan", "green", "yellowgreen"];


  return (
    <div className="App">
      <BasicGrid color={colorArr}/>
    </div>
  );
}

export default App;
