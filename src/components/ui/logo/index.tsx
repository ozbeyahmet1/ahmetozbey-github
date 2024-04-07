import Link from 'next/link';
import * as React from 'react';
import styles from './logo.module.scss';
export default function Logo() {
  return (
    <Link href="/" className={styles['logo']}>
      <h2 >
        Cosmos
      </h2>
    </Link>
  );
}
