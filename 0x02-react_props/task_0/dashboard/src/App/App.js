// src/App.js
import React from 'react';
import './App.css'; // Import your CSS file for the app
import Header from '../Header/Header'; // Import Header component
import Footer from '../Footer/Footer'; // Import Footer component
import Login from '../Login/Login'; // Import Login component
import Notifications from '../Notifications/Notifications'; // Import Notifications component
import '../index.css';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
