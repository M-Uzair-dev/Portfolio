import React, { useState } from "react";
import "../css/mainpage.css";
import avatar from "../../../images/avatar.jpeg";
import Sidebar from "./Sidebar";
import star from "../../../images/star.png";

const Mainpage = () => {
  return (
    <div className="mainpage">
      <div className="wrapper">
        <div className="brightness">
          <div className="nav">
            <Sidebar />
            <h1 className="logo">UZAIR</h1>
          </div>
          <div className="content">
            <div className="text">
              <p className="hello">Hello, I'm</p>
              <h1 className="name">Uzair Manan</h1>
              <h3 className="desc">
                I create{" "}
                <span className="stunning">
                  stunning <img src={star} className="star" />{" "}
                  <img src={star} className="star" />{" "}
                  <img src={star} className="star" />{" "}
                  <img src={star} className="star" />
                </span>{" "}
                websites using css and complex javascript animations.
              </h3>
            </div>
            <div className="image">
              <img src={avatar} className="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
