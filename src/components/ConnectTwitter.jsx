import React from 'react';

const ConnectTwitter = () => {
  const handleTwitterLogin = () => {
    window.location.href = 'http://localhost:8000/auth/twitter';
  };

  return (
    <div className="connectTwitter">
      <h2>Connect Your Twitter Account</h2>
      <button className="btn" onClick={handleTwitterLogin}>
        Link Twitter
      </button>
    </div>
  );
};

export default ConnectTwitter;
