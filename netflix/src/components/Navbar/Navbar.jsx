import React from "react";
import styles from "./Navbar.module.css";
// import logo from "../../assets/";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_left}>
        <img
          className={styles.nav_logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="netflix logo"
        />
      </div>
      <div className={styles.navbar_right}></div>
    </div>
  );
};

export default Navbar;
