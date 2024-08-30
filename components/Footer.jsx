// components/Footer.jsx

const Footer = () => {
    console.log("Footer component is rendering");
    return (
      <footer style={styles.footer}>
        <p>© 2024 MyBookstore. All Rights Reserved.</p>
        <ul style={styles.footerLinks}>
          <li><a href="/privacy-policy" style={styles.link}>Privacy Policy</a></li>
          <li><a href="/terms-of-service" style={styles.link}>Terms of Service</a></li>
          <li><a href="/contact" style={styles.link}>Contact Us</a></li>
        </ul>
      </footer>
    );
  };
  