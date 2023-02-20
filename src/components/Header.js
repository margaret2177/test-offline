import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>MeTube</div>
      <div className={styles.middle}>search</div>
      <div className={styles.right}>icons</div>
    </div>
  );
};

export default Header;
