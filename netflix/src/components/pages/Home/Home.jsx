import React from "react";
import TitleCard from "../../TitleCards/TitleCard";
import styles from "./Home.module.css";
import Navbar from "../../Navbar/Navbar";
import hero from "../../../assets/hero2.jpg";
import play from "../../../assets/play.png";
import info from "../../../assets/info.png";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.hero}>
        <img src={hero} alt="" className={styles.hero_img} />
        <div className={styles.hero_caption}>
          <img src="" alt="" />
          <h1>Unlimited movies, TV shows and more</h1>
          <p>Watch anywhere. Cancel anytime. Ready to watch?</p>
          <p>
            Enter your email or mobile number to create or restart your
            membership.
          </p>
          <div className={styles.hero_button}>
            <button className={styles.btn}>
              <img src={play} alt="" />
              Play
            </button>
            <button className={styles.btn} id={styles.btn_info}>
              <img src={info} alt="" /> More Info
            </button>
          </div>
          <TitleCard />
        </div>
      </div>
      <div className={styles.more_cards}>
        <TitleCard title={"Top Rated"} category={"top_rated"} />
        <TitleCard title={"Upcoming Movies"} category={"upcoming"} />
        <TitleCard title={"Action Movies"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
