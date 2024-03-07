import React from "react";
import "../css/about.css";
import top from "../../../images/overlay.png";
import { EvervaultCard } from "../../components/card.tsx";
import { motion } from "framer-motion";
import arrow from "../../../images/arrow.png";

const About = () => {
  const [string, setString] = React.useState(
    "A passionate full-stack developer from Karachi, Pakistan, bringing 2 years of experience to life with the MERN stack. I'm currently finishing my Computer Science degree, but already dived into freelance projects, constantly learning and collaborating. I build web experiences that matter, combining technical expertise with a drive to make a positive impact. If you're looking for a dedicated and skilled developer who's always up for a challenge, let's connect! Check out my portfolio and get in touch."
  );
  return (
    <div className="aboutPage">
      <img className="aboutTop" src={top} />
      <div className="aboutPageinner">
        <h1>ABOUT ME</h1>
        <div className="AboutContent">
          <div className="AboutText">
            <h2>Hi! I'm Uzair Manan</h2>
            <motion.p>
              {string.split(" ").map((char, index) => (
                <motion.span
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0.4 }}
                  transition={{ delay: index * 0.04 }}
                  viewport={{ once: true }}
                  key={index}
                  onClick={() => {
                    char === "MERN" &&
                      window.open(
                        "https://www.google.com/search?client=opera-gx&q=MERN+Stack&sourceid=opera&ie=UTF-8&oe=UTF-8"
                      );
                  }}
                  style={
                    char === "MERN" && {
                      cursor: "pointer",
                      textDecoration: "underline",
                    }
                  }
                >
                  {char === "MERN"
                    ? char
                    : char === "stack."
                    ? " " + char + " "
                    : char + " "}
                  {char === "collaborating." && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </motion.span>
              ))}
            </motion.p>
          </div>
          <div className="cardDivWrapper">
            <div className="cardDiv">
              <EvervaultCard text="Uzair" />
            </div>
            <div className="hoverMe">
              <p>Hover</p>
              <img src={arrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
