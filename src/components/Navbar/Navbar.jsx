import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div>
        <a href="/profile" className={style.item}>
          Profile
        </a>
      </div>
      <div>
        <a href="/dialogs" className={style.item}>
          Messages
        </a>
      </div>
      <div>
        <a href="/feed" className={style.item}>
          News
        </a>
      </div>
      <div>
        <a href="/music" className={style.item}>
          Music
        </a>
      </div>
      <div>
        <a href="/settings" className={style.item}>
          Settings
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
