import React from "react";
import styles from "./Login.module.css";
// import logo from "../../../assets/logo.jfif";

const Login = () => {
  return (
    <div className={styles.login}>
      <iframe src="https://lottie.host/embed/900a5ff9-c956-4913-9d80-e33b87eb6e8f/RM6IZWZiNC.json"></iframe>
      <div className={styles.login_form}>
        <h1>Sign in</h1>
      </div>
    </div>
  );
};

export default Login;
