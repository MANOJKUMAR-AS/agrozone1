import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import CropSelector from '../components/Cropselector';
import CropDetails from '../components/Cropdetails';



export default function Home() {
  return (
    <>
      <Head>
        <title>Agrozone</title>
      </Head>

      <header className={styles.header}>
        <h1>Agrozone<br />choose your crop</h1>
        <nav>
          <a href="/">Home</a>
          <Link href="/about">About</Link>
          <a href="/features">Features</a>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <h2>Get the Best Crop Suggestions for Your Region</h2>
        <p>Enter your pincode to receive tailored crop and seed recommendations.</p>
        <input type="text" placeholder="Enter your pincode" />
        <button>Get Suggestions</button>
      </section>

      <section className={styles.features}>
        <h2>Features</h2>
        <ul>
          <li>Location-based crop advice</li>
          <li>Soil & Climate Matching</li>
          <li>Seasonal Recommendations</li>
          <li>Sowing Time & Tips</li>
          <li>Water & Land Filter Options</li>
        </ul>
      </section>

      <section className={styles.imageSection}>
        <img
          src="https://cdn.pixabay.com/photo/2017/06/23/01/57/agriculture-2433012_1280.jpg"
          alt="Farm"
        />
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Smart Crop Advisor | Built for Educational Purposes</p>
      </footer>
    </>
  );
}
