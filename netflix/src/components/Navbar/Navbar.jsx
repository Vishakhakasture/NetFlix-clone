import React from "react";
import styles from "./Navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_left}>
        <img
          className={styles.nav_logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="netflix logo"
        />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Brows by Languages</li>
        </ul>
      </div>
      <div className={styles.navbar_right}>
        <CiSearch className={styles.icons} />
        <p>Children</p>
        <CiBellOn className={styles.icons} />
        <div className={styles.profile}>
          <BiUser className={styles.profile_icon} />
          <BiChevronDown />
          <div className={styles.dropdown}>
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
