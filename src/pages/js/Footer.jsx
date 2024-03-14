import React from "react";
import "../css/footer.css";
import git from "../../../images/git.png";
import fb from "../../../images/fb.png";
import upwork from "../../../images/upwork.png";
import { Link } from "react-scroll";
import whatsapp from "../../../images/whatsapp.png";
import arrow from "../../../images/arrow2.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div className="footer" data-scroll data-scroll-speed=".3">
      <div className="footerLeftDiv">
        <h1>Uzair Manan</h1>
        <p>
          The website was created by Uzair Manan. You can find more information
          about me on my social media. Feel free to contact me through{" "}
          <span
            onClick={() => {
              window.open("http://wa.me/+923168067371");
            }}
          >
            WhatsApp
          </span>{" "}
          or{" "}
          <span
            onClick={() => {
              window.open(
                "https://www.facebook.com/profile.php?id=61550838426849&mibextid=ZbWKwL"
              );
            }}
          >
            Facebook
          </span>
          . You can view all my project codes and history on my{" "}
          <span
            onClick={() => {
              window.open("https://github.com/M-Uzair-dev");
            }}
          >
            GitHub
          </span>
          . And for project discussions, you can reach me through{" "}
          <span>Upwork</span>.
        </p>
        <div className="imagesDiv" data-scroll data-scroll-speed="-0.1">
          <img
            src={whatsapp}
            onClick={() => {
              window.open("http://wa.me/+923168067371");
            }}
          />
          <img
            src={fb}
            onClick={() => {
              window.open(
                "https://www.facebook.com/profile.php?id=61550838426849&mibextid=ZbWKwL"
              );
            }}
          />
          <img src={upwork} />
          <img
            src={git}
            onClick={() => {
              window.open("https://github.com/M-Uzair-dev");
            }}
            style={{ filter: "invert(1)" }}
          />
        </div>
      </div>
      <div className="footerRightDiv">
        <div className="linksDiv">
          <p>
            <Link to="HOME" smooth={true} duration={500}>
              Home
            </Link>
          </p>
          <p>
            <Link to="ABOUT" smooth={true} duration={500}>
              About
            </Link>
          </p>
          <p>
            <Link to="SKILLS" smooth={true} duration={500}>
              Skills
            </Link>
          </p>
          <p>
            <Link to="PROJECTS" smooth={true} duration={500}>
              Projects
            </Link>
          </p>
          <p>
            <Link to="CONTACT" smooth={true} duration={500}>
              Contact
            </Link>
          </p>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-scroll
          data-scroll-speed="-0.1"
        >
          Back to top <img src={arrow} />
        </button>
      </div>
    </motion.div>
  );
};

export default Footer;
