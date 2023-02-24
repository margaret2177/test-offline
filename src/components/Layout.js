import React from "react";
import Header from "./Header";
import Main from "./Main";
import styles from "../styles/Layout.module.css";
import Navigation from "./Navigation";

const Layout = ({ data }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>
        <Navigation />
        <Main data={data} />
      </div>
    </div>
  );
};

export default Layout;
