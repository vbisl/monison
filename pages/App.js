import { Routes, Route } from 'react-router-dom';
import Home from './page';
import Kategoriler from './Kategoriler';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kategoriler" element={<Kategoriler />} />
    </Routes>
  );
}

export default App;