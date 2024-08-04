import React, { useEffect, useRef, useState } from "react";
import styles from "./TitleCard.module.css";
import { Link } from "react-router-dom";

const TitleCard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjdmODlmMDhkNTVlMGE0MDQ3OGU3NDllMDE0MDNlZSIsIm5iZiI6MTcyMjc2NjU5Ny45NDE4MSwic3ViIjoiNjZhZjU0MmMxMTBjYjM1MTQwMzlmNmIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.P_O4l_KPg_AjSTOBWxH4B3EsVPIULAh2L8Xb0xhteFE",
    },
  };

  const HandleWheel = (event) => {
    event.preventDefaut();
    cardsRef.current.scrollleft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", HandleWheel);
  }, []);
  return (
    <div className={styles.title_cards}>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className={styles.card_list} ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className={styles.card} key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
