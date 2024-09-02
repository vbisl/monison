import React, { useState } from 'react';
import axios from 'axios';
import PageLayout from '../components/PageLayout';
import '../styles/login.css';

export default function Register() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Şifre doğrulama alanı
  const [errors, setErrors] = useState({});
  const [registerStatus, setRegisterStatus] = useState(''); // Kayıt durumu mesajı için state

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register', { // Kayıt için gerçek API endpoint'inizi burada kullanın
        email,
        password,
        confirmPassword
      });

      if (response.status === 200) {
        setRegisterStatus('Kayıt başarılı!'); // Başarılı kayıt mesajı
        setErrors({});
      } else {
        setRegisterStatus('Kayıt başarısız.');
        setErrors(response.data.errors || {});
      }
    } catch (error) {
      if (error.response) {
        setRegisterStatus('Kayıt başarısız.');
        setErrors(error.response.data.errors || {});
      } else {
        setRegisterStatus('Sunucuya bağlanırken bir hata oluştu.');
      }
    }
  };

  return (
    <PageLayout>
      <div className="login-container">
        <h1>Register Page</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}

          <input
            type="password"
            placeholder="Confirm Password"
            className="login-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

          <button type="submit" className="register-button">Register</button>
        </form>
        {registerStatus && <p className="login-status">{registerStatus}</p>}
      </div>
    </PageLayout>
  );
}
