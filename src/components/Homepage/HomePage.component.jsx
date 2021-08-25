import React from "react";
import "./homepage.styles.scss";
import Directory from "../Directory/Directory.component";
import Slidebar from "../slidebar/Slidebar";

const HomePage = () => {
  return (
    <div className="homepage">
      <Slidebar />
      <Directory />
    </div>
  );
};

export default HomePage;
