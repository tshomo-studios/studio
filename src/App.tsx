import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from "./components/hero"
import About from "./components/about"
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
