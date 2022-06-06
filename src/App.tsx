import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Home } from './Pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { Allroutes } from './Pages/AllRoutes';
import { Navbar } from './Pages/Navbar';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
      <Allroutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
