import React from "react";
import styles from "../styles/Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>left</div>
      <div className={styles.middle}>mid</div>
      <div className={styles.right}>right</div>
    </div>
  );
};

export default Main;
