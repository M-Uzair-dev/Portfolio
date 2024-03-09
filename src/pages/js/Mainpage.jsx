import React from "react";
import "../css/mainpage.css";
import avatar from "../../../images/avatar.jpeg";
// import Sidebar from "./Sidebar";
import star from "../../../images/star.png";
import { motion } from "framer-motion";

const Mainpage = () => {
  return (
    <div data-scroll data-scroll-speed="-.7" className="mainpage">
      <div className="wrapper">
        <div className="brightness">
          <div className="content" data-scroll data-scroll-speed="0.09">
            <div className="text">
              <p className="hello">Hello, I'm</p>
              <motion.h1
                className="name"
                animate={{
                  width: "100%",
                  opacity: 1,
                }}
                initial={{
                  width: "0%",
                  opacity: 0,
                }}
                transition={{
                  type: "tween",
                  delay: 1.6,
                  duration: 1.5,
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
                    color: "rgba(255, 255, 255, 0)",
                    fontSize: "25px",
                    margin: "0",
                    fontWeight: "500",
                  }}
                  initial={{
                    color: "rgb(255, 255, 255)",
                    fontWeight: "300",
                  }}
                  transition={{
                    type: "tween",
                    delay: 4.5,
                    duration: 1,
                    ease: "linear",
                  }}
                >
                  Stunning
                  <motion.div
                    className="starwrapper"
                    animate={{ opacity: 1 }}
                    initial={{
                      opacity: 0,
                    }}
                    transition={{
                      type: "tween",
                      duration: "1.2",
                      delay: 4.5,
                      ease: "linear",
                    }}
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
                    initial={{ opacity: 0 }}
                    transition={{
                      type: "tween",
                      duration: "1.2",
                      delay: 4.5,
                      ease: "linear",
                    }}
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
                    initial={{
                      opacity: 0,
                    }}
                    transition={{
                      type: "tween",
                      duration: "1.2",
                      delay: 4.5,
                      ease: "linear",
                    }}
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
                    initial={{
                      opacity: 0,
                    }}
                    transition={{
                      type: "tween",
                      duration: "1.2",
                      delay: 4.5,
                      ease: "linear",
                    }}
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
            <div className="image" data-scroll data-scroll-speed="0.06">
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
