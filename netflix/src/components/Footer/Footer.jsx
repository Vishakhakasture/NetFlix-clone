import React from "react";
import styles from "./Footer.module.css";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_icons}>
        <IoLogoYoutube className={styles.icons_img} />
        <FaFacebook className={styles.icons_img} />
        <FaSquareInstagram className={styles.icons_img} />
        <FaTelegram className={styles.icons_img} />
      </div>
      <ul>
        <li>Audo description</li>
        <li>Help</li>
        <li>Gift cards</li>
        <li>Media centre</li>
        <li>Investors relationshi</li>
        <li>Jobs</li>
        <li>Termsof users</li>
        <li>Privacy</li>
        <li>Legal notice</li>
        <li>cookie preferences</li>
        <li>Corporate information</li>
        <li>Contact Us</li>
      </ul>
      <p className={styles.copyright_text}>©1997-2024 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
