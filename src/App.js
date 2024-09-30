
import React, { useState } from 'react';
import Login from './componentes/login';
import Welcome from './componentes/Welcome';

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    // Você pode adicionar uma requisição de logout aqui, se necessário
  };

  return (
    <div className="App">
      {!token ? (
        <Login setToken={setToken} setUser={setUser} />
      ) : (
        <Welcome user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
