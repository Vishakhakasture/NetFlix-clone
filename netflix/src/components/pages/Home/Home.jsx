import React from "react";
import styles from "./Home.module.css";
import Navbar from "../../Navbar/Navbar";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
    </div>
  );
};

export default Home;
