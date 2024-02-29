import React from "react";
import "../css/mainpage.css";
import avatar from "../../../images/avatar.jpeg";
import Sidebar from "./Sidebar";
import star from "../../../images/star.png";
import { motion } from "framer-motion";
import logo from "./../../../images/logo.png";

const Mainpage = () => {
  return (
    <div className="mainpage">
      <div className="wrapper">
        <div className="brightness">
          <div className="nav">
            <Sidebar />
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="content">
            <div className="text">
              <p className="hello">Hello, I'm</p>
              <motion.h1
                className="name"
                animate={{
                  textWrap: "nowrap",
                  width: "100%",
                  opacity: 1,
                }}
                transition={{
                  delay: 1.5,
                  duration: 1,
                  ease: "linear",
                }}
              >
                <div className="nametext">Uzair Manan</div>
              </motion.h1>
              <h3 className="desc">
                I create{" "}
                <motion.span
                  className="stunning"
                  animate={{
                    color: "transparent",
                    fontWeight: "600",
                    fontSize: "25px",
                    margin: "0",
                  }}
                  transition={{
                    delay: 4.5,
                    ease: "linear",
                  }}
                >
                  Stunning
                  <motion.div
                    className="starwrapper"
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.5, ease: "linear" }}
                  >
                    <motion.img
                      src={star}
                      className="star"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        loop: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>{" "}
                  <motion.div
                    className="starwrapper"
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.5, ease: "linear" }}
                  >
                    <motion.img
                      src={star}
                      className="star"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        loop: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>{" "}
                  <motion.div
                    className="starwrapper"
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.5, ease: "linear" }}
                  >
                    <motion.img
                      src={star}
                      className="star"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 13,
                        repeat: Infinity,
                        loop: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>{" "}
                  <motion.div
                    className="starwrapper"
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.5, ease: "linear" }}
                  >
                    <motion.img
                      src={star}
                      className="star"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        loop: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </motion.span>{" "}
                websites using CSS and complex JavaScript animations.
              </h3>
            </div>
            <div className="image">
              <motion.img
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "linear" }}
                src={avatar}
                className="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
