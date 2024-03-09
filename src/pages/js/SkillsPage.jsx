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

const SkillsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="skillspage">
      <div className="meteorsDiv">
        <Meteors />
      </div>

      <h1 className="skillsPageHeading">My Skills</h1>
      <div className="skillsCards">
        <div className="SkillsCard1">
          <img src={html} />
          <h1>HTML</h1>
          <p>I learned HTML in 2022</p>
        </div>
        <div className="SkillsCard2">
          <img src={css} />
          <h1>CSS</h1>
          <p>I learned css after HTML in 2022</p>
        </div>
        <div className="SkillsCard3">
          <img src={js} />
          <h1>JavaScript</h1>
          <p>I mastered the javascript in the span of 2 years</p>
        </div>
        <div className="SkillsCard4">
          <img src={react} />
          <h1>React</h1>
          <p>After basic understanding of Javascript, I learned react</p>
        </div>
        <div className="SkillsCard5">
          <img src={nodejs} />
          <h1>NodeJs</h1>
          <p>
            After React, my frontend was ready and I learned NodeJs fpr backend
          </p>
        </div>
        <div className="SkillsCard6">
          <img src={express} style={{ filter: "invert(1)" }} />
          <h1>ExpressJs</h1>{" "}
          <p>I learned expressJS for better understanding of backend</p>
        </div>
        <div className="SkillsCard7">
          <img src={mongodb} />
          <h1>MongoDB</h1>
          <p>I learned MongoDB for Database management.</p>
        </div>
        <div className="SkillsCard8">
          <img src={next} style={{ filter: "invert(1)" }} />
          <h1>NextJs</h1>
          <p>I learned NextJS for better Developer experience and features</p>
        </div>
        <div className="SkillsCard9">
          <img src={typescript} />
          <h1>TypeScript</h1>
          <p>
            I learned TypeScript for better Typing and error handling ovr
            Javacript
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
