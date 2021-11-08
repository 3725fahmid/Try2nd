import Head from 'next/head';
import * as React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <div className={styles.body}>
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
      <div className={styles.FastLook}>
        <Button className={styles.Mapp}>
          <b>Mobile App</b>
        </Button>
        {/* <Image
          className={styles.Imgfont}
          src="/home.png"
          alt="Picture of the author"
          width={300}
          height={150}
        /> */}
        <form className={styles.freecls}>
          <p>
            <b>Your Free Class</b>
          </p>
          <p>
            <TextField
              className={styles.inp1}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </p>
          <p>
            <TextField
              className={styles.inp1}
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
            />
          </p>
          <p>
            <TextField
              // id="outlined-basic"
              label="Phone Number"
              // variant="outlined"
            />
          </p>
          <Button className={styles.submit}>Sybmit</Button>
        </form>
      </div>
    </div>
  );
}
