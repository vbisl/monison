import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Monibook</div>
      <div style={styles.rightSection}>
        <Link href="/login">
          <button style={styles.loginButton}>Login</button>
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 25px',
    backgroundColor: 'rgba(40, 30, 60, 0.4)',
    color: '#fff',
    position: 'relative',
    zIndex: 1,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginLeft: '50px',
    userSelect: 'none',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  loginButton: {
    fontSize: '16px',
    padding: '10px 20px',
    backgroundColor: 'rgba(0, 123, 255, 0)', // Transparan mavi renk
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    userSelect: 'none',
  },

};

export default Navbar;
