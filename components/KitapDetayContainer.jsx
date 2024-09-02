import React, { useState, useEffect } from 'react';
import axios from 'axios';

function KitapDetay({ kitapID }) {
   
    const [kitap, setKitap] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchKitap = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/kitaplar/${kitapID}`, {
                    responseType: 'text' // Yanıt türünü text olarak belirtiyoruz
                });
                const kitap = response.data; // Bu durumda response.data bir string olacaktır
                console.log(kitap); // Konsolda kontrol edebiliriz
                setKitap(kitap); 
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchKitap();
    }, [kitapID]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Kitap Bilgileri</h2>
            <pre>{kitap}</pre> {/* Gelen string yanıtı ekranda gösteriyoruz */}
        </div>
    );
}

export default KitapDetay;
