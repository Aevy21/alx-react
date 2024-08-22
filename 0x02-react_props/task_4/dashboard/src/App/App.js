// src/App.js

import React, { useState } from 'react';
import './App.css'; // Import your CSS file for the app
import Header from '../Header/Header'; // Import Header component
import Footer from '../Footer/Footer'; // Import Footer component
import Login from '../Login/Login'; // Import Login component
import Notifications from '../Notifications/Notifications'; // Import Notifications component
import CourseList from '../CourseList/CourseList'; // Import CourseList component
import PropTypes from 'prop-types';
import '../index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status
  const [displayDrawer, setDisplayDrawer] = useState(false); // State for notifications drawer

  return (
    <>
      <Notifications displayDrawer={displayDrawer} />
      <div className="App">
        <Header />
        <div className="App-body">
          {/* Display Login or CourseList based on isLoggedIn state */}
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

export default App;

