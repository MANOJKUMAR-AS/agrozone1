import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import CropSelector from '../components/Cropselector';
import CropDetails from '../components/Cropdetails';
import UploadFile from '../components/UploadFile';

export default function Home() {
  const [pincode, setPincode] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleGetSuggestions = () => {
    console.log('Fetching suggestions for:', pincode);
    // You can integrate API or logic here based on pincode
    setShowDetails(true);
  };

  return (
    <>
      <Head>
        <title>Agrozone</title>
      </Head>

      <header className={styles.header}>
        <h1>
          Agrozone
          <br />
          Choose Your Crop
        </h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <h2>Get the Best Crop Suggestions for Your Region</h2>
        <p>Enter your pincode to receive tailored crop and seed recommendations.</p>
        <label htmlFor="pincode" className={styles.srOnly}>
          Pincode
        </label>
        <input
          id="pincode"
          type="text"
          placeholder="Enter your pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <button onClick={handleGetSuggestions}>Get Suggestions</button>
      </section>
 

      <section className={styles.imageSection}>
        <img
  src="https://cdn.pixabay.com/photo/2017/06/23/01/57/agriculture-2433012_1280.jpg"
  alt="Farm landscape with crops"
/>

      </section>

      <section style={{ padding: '2rem', textAlign: 'center' }}>
        {/* Firebase Upload Feature */}
        <UploadFile />
      </section>

      <section style={{ padding: '2rem' }}>
        {/* Conditionally render crop components */}
        {showDetails && (
          <>
            <h2>Suggested Crops</h2>
            <CropSelector />
            <CropDetails />
          </>
        )}
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Smart Crop Advisor | Built for Educational Purposes</p>
      </footer>
    </>
  );
}
