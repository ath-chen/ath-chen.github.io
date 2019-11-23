import React from 'react';
import Navbar from './navbar';
import Welcome from './welcome-page';
import Footer from './footer';

import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Navbar />
          <Welcome />
          <Footer />
      </header>
    </div>
  );
}

export default App;


