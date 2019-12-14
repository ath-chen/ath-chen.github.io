import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Routes from './routes'

import './App.css';

function App() {

  return (
      <div className="App">
        <header className="App-header">
            <Navbar />
            <Routes />
        </header>
        <Footer />
      </div>
  );
}

export default App;


