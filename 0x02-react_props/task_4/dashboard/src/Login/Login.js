 // src/Login/Login.js
import React from 'react';
import './Login.css'; // Import the CSS file for the login

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      {/* Email Input */}
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" className="input-field" />
      {/* Password Input */}
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" className="input-field" />
      {/* Button */}
      <button className="btn-submit">OK</button>
    </>
  );
}

export default Login;
