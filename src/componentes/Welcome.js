import React from 'react';

const Welcome = ({ user }) => {
  console.log('Usuário recebido:', user);  // Verifica os dados recebidos do usuário

  const handleLogout = () => {
    document.cookie = "usuario_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
  };

  return (
    <div className="welcome">
      <h2>Bem-vindo, {user.name ? user.name : 'Usuário'}!</h2>
      <p>Você está conectado desde {user.loginTime ? user.loginTime : 'N/A'}</p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Welcome;
