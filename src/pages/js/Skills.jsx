import React from "react";
import "../css/skills.css";
import { motion } from "framer-motion";
import html from "../../../images/html.png";
import css from "../../../images/css.png";
import js from "../../../images/js.png";
import react from "../../../images/react.png";
import nodejs from "../../../images/node.png";
import express from "../../../images/express.png";
import mongodb from "../../../images/mongodb.png";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skillsHeading">My Skills</h1>
      <motion.div className="rotatingDivsWrapper">
        <motion.div className="div1">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              loop: Infinity,
              ease: "linear",
            }}
            className="outerCircle"
          >
            <motion.div className="circle1">
              <motion.img
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  loop: Infinity,
                  ease: "linear",
                }}
                src={mongodb}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="div2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 17,
              repeat: Infinity,
              loop: Infinity,
              ease: "linear",
            }}
            className="outerCircle"
          >
            <motion.div className="circle2">
              <motion.img
                animate={{ rotate: -360 }}
                transition={{
                  duration: 17,
                  repeat: Infinity,
                  loop: Infinity,
                  ease: "linear",
                }}
                src={express}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="div3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              loop: Infinity,
              ease: "linear",
            }}
            className="outerCircle"
          >
            <motion.div className="circle3">
              <motion.img
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  loop: Infinity,
                  ease: "linear",
                }}
                style={{ maxWidth: "70%" }}
                src={nodejs}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="div4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              loop: Infinity,
              ease: "linear",
            }}
            className="outerCircle"
          >
            <motion.div className="circle4">
              <motion.img
                animate={{ rotate: -360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  loop: Infinity,
                  ease: "linear",
                }}
                src={react}
                style={{ maxWidth: "70%" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="div5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 17,
              repeat: Infinity,
              loop: Infinity,
              ease: "linear",
            }}
            className="outerCircle"
          >
            <motion.div className="circle5">
              <motion.img
                animate={{ rotate: -360 }}
                transition={{
                  duration: 17,
                  repeat: Infinity,
                  loop: Infinity,
                  ease: "linear",
                }}
                style={{ maxWidth: "50%" }}
                src={js}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="div6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              loop: Infinity,
              ease: "linear",
            }}
            className="outerCircle"
          >
            <motion.div className="circle6">
              <motion.img
                animate={{ rotate: -360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  loop: Infinity,
                  ease: "linear",
                }}
                style={{ maxWidth: "60%" }}
                src={css}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="div7">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              loop: Infinity,
              ease: "linear",
            }}
            className="outerCircle"
          >
            <motion.div className="circle7">
              <motion.img
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  loop: Infinity,
                  ease: "linear",
                }}
                style={{ maxWidth: "60%" }}
                src={html}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="centerDiv">
          <p>MERN</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
