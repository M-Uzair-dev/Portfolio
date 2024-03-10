import React, { useEffect, useRef } from "react";
import { Meteors } from "../../components/meteors";
import "../css/skillsPage.css";
import html from "../../../images/html.png";
import css from "../../../images/css.png";
import js from "../../../images/js.png";
import react from "../../../images/react.png";
import nodejs from "../../../images/node.png";
import express from "../../../images/express.png";
import mongodb from "../../../images/mongodb.png";
import next from "../../../images/nextjs.png";
import typescript from "../../../images/typescript.png";
import arrow from "../../../images/arrow2.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SkillsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const cards = [
    {
      name: "HTML",
      image: html,
      description: "I learned HTML in 2022",
    },
    {
      name: "CSS",
      image: css,
      description: "I learned css after HTML in 2022",
    },
    {
      name: "JavaScript",
      image: js,
      description: "I mastered the javascript in the span of 2 years",
    },
    {
      name: "React",
      image: react,
      description: "I was able to build a web app using react",
    },
    {
      name: "NodeJS",
      image: nodejs,
      description: "I was able to build a server using nodeJS",
    },
    {
      name: "Express",
      image: express,
      description: "I was able to build a server using express",
    },
    {
      name: "MongoDB",
      image: mongodb,
      description: "I was able to build a server using mongodb",
    },
    {
      name: "NextJS",
      image: next,
      description: "I will learn nextJS very soon.",
    },
    {
      name: "TypeScript",
      image: typescript,
      description: "I wil learn typescript right after nextJS.",
    },
  ];
  return (
    <div className="skillspage">
      <div className="meteorsDiv">
        <Meteors />
      </div>
      <img
        src={arrow}
        onClick={() => {
          navigate("/");
        }}
        className="backArrow"
      />
      <h1 className="skillsPageHeading">My Skills</h1>
      <motion.div className="skillsCards">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2, type: "tween", duration: "0.5" }}
          >
            <div className={`innercard ${card.name}`}>
              <img
                src={card.image}
                style={
                  card.image === next || card.image === express
                    ? { filter: "invert(1)" }
                    : {}
                }
              />
              <h1>{card.name}</h1>
              <p>{card.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsPage;
