import Head from '../components/Head/Head';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.css';

import axios from 'axios';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href='https://nextjs.org'>Next.js!</a>
          </h1>
        </main>
      </div>
    </Layout>
  );
}
