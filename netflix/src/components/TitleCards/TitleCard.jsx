import React, { useEffect, useRef } from "react";
import styles from "./TitleCard.module.css";
import cards_data from "../../assets/Cards/Cards_data";

const TitleCard = ({ title, category }) => {
  const cardsRef = useRef();

  const HandleWheel = (event) => {
    event.preventDefaut();
    cardsRef.current.scrollleft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", HandleWheel);
  }, []);
  return (
    <div className={styles.title_cards}>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className={styles.card_list} ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div className={styles.card} key={index}>
              <img src={card.image} alt="" />
              {/* <p>{card.name}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
