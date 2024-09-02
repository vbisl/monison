import React, { useState } from 'react';
import axios from 'axios'; // ---> Axios'u import ediyoruz
import PageLayout from '../components/PageLayout';
import '../styles/login.css';

export default function Login() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginStatus, setLoginStatus] = useState(''); // Login durumu mesajı için state

  const handleSubmit = async (e) => {
    e.preventDefault(); // Sayfa yenilemeyi durduruyoruz

    try {
      const response = await axios.post('/api/login', { // Gerçek API endpoint'inizi burada kullanın
        email,
        password
      });

      if (response.status === 200) {
        setLoginStatus('Giriş başarılı!'); // Başarılı giriş mesajı
        setErrors({});
      } else {
        setLoginStatus('Giriş başarısız.'); // Başarısız giriş mesajı
        setErrors(response.data.errors || {}); // Hataları ayarlıyoruz (eğer varsa)
      }
    } catch (error) {
      if (error.response) {
        setLoginStatus('Giriş başarısız.');
        setErrors(error.response.data.errors || {}); // Backend'den gelen hataları ayarlıyoruz
      } else {
        setLoginStatus('Sunucuya bağlanırken bir hata oluştu.');
      }
    }
  };

  return (
    <PageLayout>
      <div className="login-container">
        <h1>Login Page</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-text">{errors.email}</p>} {/* Backend'den gelen hata */}

          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-text">{errors.password}</p>} {/* Backend'den gelen hata */}

          <button type="submit" className="login-button">Login</button>
          <a href="/register" className="register-button">Register</a> {/* Register butonu eklenmiş durumda */}
        </form>
        {loginStatus && <p className="login-status">{loginStatus}</p>} {/* ---> Login durumu mesajı */}
      </div>
    </PageLayout>
  );
}
