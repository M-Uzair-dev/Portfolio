import React from "react";
import "../css/footer.css";
import git from "../../../images/git.png";
import fb from "../../../images/fb.png";
import upwork from "../../../images/upwork.png";
import whatsapp from "../../../images/whatsapp.png";
import arrow from "../../../images/arrow2.png";

const Footer = () => {
  return (
    <div className="footer" data-scroll data-scroll-speed=".3">
      <div className="footerLeftDiv">
        <h1>Uzair Manan</h1>
        <p>
          The website was created by Uzair Manan. You can find more information
          about me on my social media. Feel free to contact me through{" "}
          <span>WhatsApp</span> or <span>Facebook</span>. You can view all my
          project codes and history on my <span>GitHub</span>. And for project
          discussions, you can reach me through <span>Upwork</span>.
        </p>
        <div className="imagesDiv">
          <img src={whatsapp} />
          <img src={fb} />
          <img src={upwork} />
          <img src={git} style={{ filter: "invert(1)" }} />
        </div>
      </div>
      <div className="footerRightDiv">
        <div className="linksDiv">
          <p>Home</p>
          <p>About</p>
          <p>Skills</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top <img src={arrow} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
