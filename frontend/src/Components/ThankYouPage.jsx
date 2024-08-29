import React from 'react';
import './ThankYouPage.css'

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <h1>Thank You!</h1>
      <p>Your submission has been received.</p>
      <p>We appreciate your feedback and will get back to you shortly.</p>
      <a href="/" className="back-home">Go back to Home</a>
    </div>
  );
};

export default ThankYouPage;
