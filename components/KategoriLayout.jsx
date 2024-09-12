import React, { useState, useEffect } from 'react';
import axios from 'axios'; // axios'u unutmuşsunuz, bunu eklemelisiniz.


function Kategoriler() {
    const [kategoriler, setKategoriler] = useState('');  // Kategorileri tutmak için state
    const [loading, setLoading] = useState(true);        // Yüklenme durumu için state
    const [error, setError] = useState(null);            // Hataları tutmak için state

    useEffect(() => {
        const fetchKategoriler = async () => {
            try {
                
                const response = await axios.get(`http://localhost:8080/api/kategoriler`, {
                    responseType: 'json' // Yanıt türü JSON olmalı çünkü JSON formatında veri bekleniyor.
                });
                const kategoriler = response.data; // Gelen kategorileri state'e setliyoruz.
                setKategoriler(kategoriler); 
                setLoading(false); // Yükleme tamamlandı.
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError(error.message); // Hata durumunu state'e yazıyoruz.
                setLoading(false); // Yükleme tamamlandı ama hata oluştu.
            }
        };

        fetchKategoriler();
    }, []); // Boş bağımlılık dizisi, bileşen yüklendiğinde bir defa çalıştırılır.

    if (loading) {
        return <div>Loading...</div>; // Yükleniyor mesajı
    }

    if (error) {
        return <div>Error: {error}</div>; // Hata mesajı
    }

    return (
        <div>
            <h1>Kategoriler</h1>
            <pre>{JSON.stringify(kategoriler, null, 2)}</pre> {/* JSON verisini daha okunabilir hale getiriyoruz */}
        </div>
    );
}

export default Kategoriler;
