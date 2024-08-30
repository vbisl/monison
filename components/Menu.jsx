// components/Menu.jsx

import Link from 'next/link';

const Menu = () => {
  console.log("Menu component is rendering");
  return (
    <div style={styles.menu}>
      <h2>Menu</h2>
      <ul style={styles.menuItems}>
        <li style={styles.menuItem}>
          <Link href="/">Home</Link>
        </li>
        <li style={styles.menuItem}>
          <Link href="/about">About</Link>
        </li>
        <li style={styles.menuItem}>
          <Link href="/books">Books</Link>
        </li>
        <li style={styles.menuItem}>
          <Link href="/authors">Authors</Link>
        </li>
        <li style={styles.menuItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
