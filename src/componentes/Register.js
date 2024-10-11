import React, { useState } from 'react';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, nome }),
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
      } else {
        alert('Erro ao cadastrar!');
      }
    } catch (error) {
      console.error('Erro ao cadastrar', error);
    }
  };

  return (
    <div className="register-form">
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
      <input
          type="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;
