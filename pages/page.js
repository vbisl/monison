import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={styles.main}>
        <h1>Welcome to MyBookstore</h1>
        <p>This is a simple Next.js page with a Navbar component.</p>
      </main>
    </div>
  );
}

const styles = {
  main: {
    padding: '20px',
    textAlign: 'center',
  },
};
