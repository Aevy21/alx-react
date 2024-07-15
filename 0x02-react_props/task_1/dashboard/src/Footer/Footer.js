// src/Footer/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for the footer
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </footer>
  );
}

export default Footer;
