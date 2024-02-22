import React, { useState, useEffect } from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  
  useEffect (() => {
    fetch("http://localhost:3001")
    .then(res => res.json())
    .then(data => setMessage (data.message))
    .catch(err => console.log(err));
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </header>
    </div>
  );
}

export default App;
