import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div>
        <a href="" className={style.item}>
          Profile
        </a>
      </div>
      <div>
        <a href="" className={style.item}>
          Messages
        </a>
      </div>
      <div>
        <a href="" className={style.item}>
          News
        </a>
      </div>
      <div>
        <a href="" className={style.item}>
          Music
        </a>
      </div>
      <div>
        <a href="" className={style.item}>
          Settings
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
