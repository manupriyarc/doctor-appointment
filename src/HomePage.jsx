import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Link to external CSS

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="overlay">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="logo">
            Click2Cure. | <span className="subtitle">THE ECHANNELING PROJECT</span>
          </div>
          <div className="auth-buttons">
            <button onClick={() => navigate('/Login')} className="link-button">LOGIN</button>
            <button onClick={() => navigate('/register')} className="link-button">REGISTER</button>
          </div>
        </div>

        {/* Center Content */}
        <div className="content">
          <h1>Avoid Hassles & Delays.</h1>
          <p>
            How is health today, Sounds like not good!<br />
            Don't worry. Find your doctor online Book as you wish with eDoc.<br />
            We offer you a free doctor channeling service, Make your appointment now.
          </p>
          <button onClick={() => navigate('/Login')} className="main-button">
            Make Appointment
          </button>
        </div>

        {/* Footer */}
        <div className="footer">
          A Web Solution by Hashen.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
