"use client"
import { useState } from 'react';

const SupportButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSupport = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="support-button-container">
      <button className={`support-button ${isOpen ? 'open' : ''}`} onClick={toggleSupport}>
        {isOpen ? 'Close' : 'Help'}
      </button>
      {isOpen && (
        <div className="support-content">
          <h3>Customer Support</h3>
          <p>Email: simms@orionpitch.com</p>
          <p>Phone: +1 (303) 656-6326</p>
          <p>Live Chat: Available 24/7</p>
        </div>
      )}
      <style jsx>{`
        .support-button-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
        }

        .support-button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #0070f3;
          color: white;
          font-size: 13px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .support-button.open {
          width: 40px;
          height: 40px;
          background-color: #555;
        }

        .support-content {
          position: absolute;
          bottom: 70px;
          right: 0;
          width: 200px;
          padding: 15px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          font-size: 14px;
          color: #333;
          z-index: 1000;
        }

        .support-content h3 {
          margin: 0;
          font-size: 16px;
          margin-bottom: 8px;
          color: #0070f3;
        }

        .support-content p {
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
};

export default SupportButton;
