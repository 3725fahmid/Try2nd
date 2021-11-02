import Head from 'next/head';
import * as React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>TryBstady</title>
      </Head>
      <ul className={styles.nav}>
        <li className={styles.h2}>BSTADY</li>
        <li>
          <Link href="/">
            <a className={styles.a}>BCS preparation</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.a}>Govt exam preparation</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.a}>Admition preparation</a>
          </Link>
        </li>
        <Button className={styles.btn} href="/">
          Login
        </Button>
      </ul>
    </>
  );
}
