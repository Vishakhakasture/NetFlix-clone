import React, { useEffect, useState } from "react";
import styles from "./Player.module.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
const Player = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjdmODlmMDhkNTVlMGE0MDQ3OGU3NDllMDE0MDNlZSIsIm5iZiI6MTcyMjc2NjU5Ny45NDE4MSwic3ViIjoiNjZhZjU0MmMxMTBjYjM1MTQwMzlmNmIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.P_O4l_KPg_AjSTOBWxH4B3EsVPIULAh2L8Xb0xhteFE",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.player}>
      <IoArrowBackCircleOutline
        className={styles.icon}
        onClick={() => navigate(-2)}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className={styles.player_info}>
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
