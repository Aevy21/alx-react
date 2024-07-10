import React from 'react';
import { getLatestNotification } from './utils'; // Import getLatestNotification function
import closeIcon from './close-icon.png'; // Import close icon image
import './Notifications.css'; // Import your CSS file

function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        className="close-button"
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img src={closeIcon} alt="Close Icon" />
      </button>
      <p>
        <strong>Here are the notifications</strong>
      </p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}
export default Notifications;
export {Notifications};
