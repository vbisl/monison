import { useState } from 'react';
import Link from 'next/link';
import '../styles/buttons.css'; // buttons.css dosyasını import edin

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div style={styles.menuContainer}>
      <div onClick={handleMenuToggle} style={styles.menuButton}>
        ☰
      </div>
      <ul style={{ ...styles.navItems, display: isMenuOpen ? 'block' : 'none' }}>
        <li style={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/Kategoriler">Kategoriler</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  menuContainer: {
    position: 'absolute', // Menü konteynerini sabit bir konuma yerleştirir
    top: '4px', // Navbar ile çakışması için yukarıdan mesafe
    left: '10px', // Soldan mesafe
    width: '50px', // Kare konteyner genişliği
    height: '50px', // Kare konteyner yüksekliği
    backgroundColor: 'transparent', // Konteyneri şeffaf yapar
    borderRadius: '8px', // Köşeleri yuvarlatma (opsiyonel)
    zIndex: 1000, // Navbar'ın üzerinde görünmesini sağlar
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  menuButton: {
    fontSize: '24px',
    color: 'white', // Butonun rengini belirler
    userSelect: 'none', // Kullanıcının metni seçmesini engeller
  },
  navItems: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(51, 51, 51, 0.5)',
    position: 'absolute', // Menü öğeleri açıldığında mutlak konumlandırma
    top: '55px', // Menü butonunun hemen altında yer alır
    left: '0',
    width: '150px', // Menü genişliği
  },
  navItem: {
    padding: '10px 20px',
    borderBottom: '1px solid rgba(68, 68, 68, 0.1)',
    color: 'rgba(255, 255, 255, 0.9)',
  },
};

export default Menu;
