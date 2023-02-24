import React, { useState } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [term, setTerm] = useState();
  const [result, setResult] = useState();
  const [response, setResponse] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await fetch("http://localhost:3000/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ term }), // body data type must match "Content-Type" header
    });
    console.log("data", data);
    setResponse(data);

    try {
    } catch (error) {
      console.log(error);
    }
  };
  console.log("resposnse", response);
  return (
    <div className={styles.header}>
      <div className={styles.left}>MeTube</div>
      <div className={styles.middle}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
          />
        </form>
      </div>
      <div className={styles.right}>icons</div>
    </div>
  );
};

export default Header;
