import React, { useState } from "react";
import styles from "./Login.module.css";
// import logo from "../../../assets/logo.jfif";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className={styles.login}>
      <iframe
        className={styles.logo}
        src="https://lottie.host/embed/900a5ff9-c956-4913-9d80-e33b87eb6e8f/RM6IZWZiNC.json"
      ></iframe>
      <div className={styles.login_form}>
        <h1>{signState}</h1>
        <form action="">
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Name" required />
          ) : (
            <></>
          )}
          <input type="text" placeholder="email" required />
          <input type="password" placeholder="Password" />
          <button>{signState}</button>
          <div className={styles.form_help}>
            <div className={styles.remember}>
              <input type="checkbox" />
              <label htmlFor="">Remeber</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className={styles.form_switch}>
          {signState === "Sign In" ? (
            <p>
              New to Netflix ?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account ?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
