import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageLayout from '../components/PageLayout';
import '../styles/kategori.css'; // CSS dosyasını import ediyoruz

const Kategoriler = () => {
  const [kategoriler, setKategoriler] = useState([]);

  useEffect(() => {
    // API'den kategorileri çekiyoruz
    axios.get('http://localhost:8080/api/kategoriler')
      .then(response => {
        setKategoriler(response.data); // Gelen veriyi state'e set ediyoruz
      })
      .catch(error => {
        console.error('Kategoriler verisi çekilemedi:', error);
      });
  }, []);

  return (
    <PageLayout>
      <div className="page-container">
        <div className="kategori-container">
          {kategoriler.map((kategori) => (
            <div 
              key={kategori.id} 
              className="kategori"
              onClick={() => alert(`Kategori ${kategori.id} tıklandı`)}
            >
              <div className="kitap-resmi-container">
                <img src="/path/to/placeholder.png" alt="Kitap Resmi" className="kitap-resmi" />
              </div>
              <h2 className="kategori-ad">{kategori.ad}</h2>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Kategoriler;
