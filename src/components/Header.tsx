import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
    <img src="https://images.pexels.com/photos/1510150/pexels-photo-1510150.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt="Lorem img" />
  </header>
  )
}

export default Header;