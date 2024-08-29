import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './Components/SignupPage';
import ThankYoupage from './Components/ThankYouPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
       
          <Route path="/" element={<SignupPage />} />
          <Route path="/thank-you" element={< ThankYoupage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
