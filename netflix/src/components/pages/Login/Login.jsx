import React, { useState } from "react";
import styles from "./Login.module.css";
import { login, signUp } from "../../../firebase";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
  };

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
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Name"
              required
            />
          ) : (
            <></>
          )}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="email"
            required
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
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
