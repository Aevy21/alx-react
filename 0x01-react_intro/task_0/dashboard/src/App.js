import React from 'react';
import './App.css'; // Import your CSS file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="holberton_logo.png" alt="Holberton Logo" /> {/* Replace with your Holberton logo */}
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>Copyright 2024 - Holberton School</p> {/* Update with the current year */}
      </footer>
    </div>
  );
}

export default App;
