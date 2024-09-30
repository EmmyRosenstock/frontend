import React from 'react';

const Welcome = ({ user, onLogout }) => {
  return (
    <div>
      <h1>Bem-vindo, {user.name}!</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Welcome;