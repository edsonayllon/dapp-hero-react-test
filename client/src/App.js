import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" data-dh-feature="threebox" data-dh-property-image="true"/>
        <p data-dh-feature="threebox" data-dh-property-name="true">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="#"
          data-dh-feature="network"
          data-dh-property-enable="true"
        >
          Connect Wallet
        </a>
      </header>
    </div>
  );
}

export default App;
