  const Footer = () => {
    console.log("Footer component is rendering");
    return (
      <footer style={styles.footer}>
        <p>© 2024 Monibook. All Rights Reserved.</p>
        <ul style={styles.footerLinks}>
          <li><a href="/privacy-policy" style={styles.link}>Privacy Policy</a></li>
          <li><a href="/terms-of-service" style={styles.link}>Terms of Service</a></li>
          <li><a href="/contact" style={styles.link}>Contact Us</a></li>
        </ul>
      </footer>
    );
  };

  const styles = {
  footer: {
    marginTop: '50px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
  },
  footerLinks: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  };

  export default Footer;
