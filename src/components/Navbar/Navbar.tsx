import React from 'react';
import s from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={s.nav}>
        <div className={s.item}>
          <a className={s.link} href="#1">Profile</a>
          </div>
        <div className={s.item}>
          <a className={`${s.link} ${s.active}`} href="#2">Messages</a>
          </div>
        <div className={s.item}>
          <a className={s.link} href="#3">News</a>
          </div>
        <div className={s.item}>
          <a className={s.link} href="#4">Music</a>
          </div>
        <div className={s.item}>
          <a className={s.link} href="#5">Settings</a>
          </div>
      </nav>
  )
}

export default Navbar;