import Navbar from './Navbar';
import Footer from './Footer';
import Menu from './Menu';

const PageLayout = ({ children }) => {
  return (
    <div style={styles.container}>
      <Navbar />
      <Menu />
      <div style={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default PageLayout;
