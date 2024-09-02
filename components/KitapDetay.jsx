import React from 'react';
import KitapDetay from './KitapDetay';

function App() {
    return (
        <div>
            <h1>Kitap Detayları</h1>
            <KitapDetay kitapID={1} />  {/* 1 numaralı kitabı gösterecek */}
        </div>
    );
}

export default App;