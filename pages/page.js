import PageLayout from '../components/PageLayout';
import '../styles/globals.css';

export default function Home() {
  return (
    <PageLayout>
      <main style={styles.main}>
        <h1>Welcome to MyBookstore</h1>
        <p>This is a simple Next.js page with a Navbar, Menu, and Footer component.</p>
      </main>
    </PageLayout>
  );
}

const styles = {
  main: {
    flex: 1,
    padding: '20px',
    textAlign: 'center',
  },
};
