import axios from 'axios';
import React, { useState } from 'react';

const AuthPage = (props) => {
  const [username, setUsername] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5173', { username })
      .then(r => props.onAuth({ ...r.data, secret: username }))
      .catch(e => console.log('error', e));
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome </div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" value={username} onChange={handleChange} />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
