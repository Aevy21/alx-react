import React from 'react';
import './App.css'; // Import your CSS file
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Holberton_logo.jpg" alt="Holberton Logo" /> 
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
	 {/* Email Input */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        {/* Password Input */}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        {/* Button */}
        <button>OK</button>{/* Email Input */} 
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(false)} </p> 
      </footer>
    </div>
  );
}

export default App;
