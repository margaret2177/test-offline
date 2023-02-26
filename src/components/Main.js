import React from "react";
import styles from "../styles/Main.module.css";

const Main = ({ data: datas }) => {
  console.log(datas);
  return (
    <div className={styles.main}>
      <div className={styles.left}>left</div>
      <div className={styles.middle}>
        {datas?.map((d, i) => (
          <h1 key={i}>{d.name}</h1>
        ))}
      </div>
      <div className={styles.right}>right</div>
    </div>
  );
};

export default Main;
