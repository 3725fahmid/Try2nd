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
      <div className={styles.FastLook}>
        <Button className={styles.btn2}>
          <b>Mobile App</b>
        </Button>
        <div className={styles.freecls}>
          <p>Your Free Class</p>
          <p>
            In vector calculus, the gradient of a scalar-valued differentiable
            function f of several variables is the vector field (or
            vector-valued function) ∇f whose value at a point p is the vector
            whose components are the partial derivatives of f at p. That is, for
            f:ℝⁿ→ℝ, its gradient ∇f:ℝⁿ→ℝⁿ is defined at the …
          </p>
        </div>
      </div>
    </>
  );
}
