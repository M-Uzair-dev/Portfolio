import React, { useState } from "react";
import "../css/mainpage.css";
import Sidebar from "./Sidebar";

const Mainpage = () => {
  return (
    <div className="mainpage">
      <div className="wrapper">
        <Sidebar />
      </div>
    </div>
  );
};

export default Mainpage;
