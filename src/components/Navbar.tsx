import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.item}>
          <a className={styles.link} href="#1">Profile</a>
          </div>
        <div className={styles.item}>
          <a className={`${styles.link} ${styles.active}`} href="#2">Messages</a>
          </div>
        <div className={styles.item}>
          <a className={styles.link} href="#3">News</a>
          </div>
        <div className={styles.item}>
          <a className={styles.link} href="#4">Music</a>
          </div>
        <div className={styles.item}>
          <a className={styles.link} href="#5">Settings</a>
          </div>
      </nav>
  )
}

export default Navbar;