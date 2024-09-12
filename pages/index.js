import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM.client import edilmesi gerekiyor
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page';
import Kategoriler from './Kategoriler';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kategoriler" element={<Kategoriler />} />
      </Routes>
    </BrowserRouter>
  );
}

// ReactDOM.createRoot kullanarak render işlemini gerçekleştiriyoruz
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
