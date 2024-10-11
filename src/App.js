import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './componentes/login';
import Welcome from './componentes/Welcome';
import Register from './componentes/Register';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (data) => {
    setUser(data.user);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={user ? <Welcome user={user} /> : <LoginForm onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {!user && (
          <span>
            <p>Ainda não é cadastrado?</p>
            <Link to="/register">Cadastre-se aqui</Link>
          </span>
        )}
      </div>
    </Router>
  );
};

export default App;
