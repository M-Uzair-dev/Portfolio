import React, { useState } from "react";
import "../css/contact.css";
import html from "../../../images/html.png";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(0);
  return (
    <div className="contactPage">
      <h1>Contact Me</h1>
      <div className="contactDetails">
        <div className="FormDiv">
          <input className="email" placeholder="Your Email" />
          <input className="Heading" placeholder="Subject" />
          <textarea className="message" placeholder="Message" />
          <button>Submit</button>
        </div>
        <div className="textDiv">
          <h1>Contact info :</h1>
          <div className="contactinfoDetails">
            <div
              className={`textinContact ${
                isHovered !== 1 && isHovered !== 0 ? "greyText" : "whiteText"
              }`}
              onMouseEnter={() => setIsHovered(1)}
              onMouseLeave={() => setIsHovered(0)}
            >
              <p>
                <span>U</span>
                <span>z</span>
                <span>a</span>
                <span>i</span>
                <span>r</span>
              </p>
              <p>
                <span>M</span>
                <span>a</span>
                <span>n</span>
                <span>a</span>
                <span>n</span>
              </p>
            </div>
            <p
              className={`textinContact ${
                isHovered !== 2 && isHovered !== 0 ? "greyText" : "whiteText"
              }`}
              onMouseEnter={() => setIsHovered(2)}
              onMouseLeave={() => setIsHovered(0)}
            >
              <span>u</span>
              <span>z</span>
              <span>a</span>
              <span>i</span>
              <span>r</span>
              <span>m</span>
              <span>a</span>
              <span>n</span>
              <span>a</span>
              <span>n</span>
              <span>d</span>
              <span>e</span>
              <span>v</span>
              <span>@</span>
              <span>g</span>
              <span>m</span>
              <span>a</span>
              <span>i</span>
              <span>l</span>
              <span>.</span>
              <span>c</span>
              <span>o</span>
              <span>m</span>
            </p>
            <div
              className={`textinContact ${
                isHovered !== 3 && isHovered !== 0 ? "greyText" : "whiteText"
              }`}
              onMouseEnter={() => setIsHovered(3)}
              onMouseLeave={() => setIsHovered(0)}
            >
              <p>
                <span>+</span>
                <span>9</span>
                <span>2</span>
              </p>
              <p>
                <span>3</span>

                <span>1</span>
                <span>6</span>
              </p>
              <p>
                <span>8</span>
                <span>0</span>
                <span>6</span>
                <span>7</span>
                <span>3</span>
                <span>7</span>
                <span>1</span>
              </p>
            </div>
          </div>
          <div className="socialicons">
            <img src={html} />
            <img src={html} />
            <img src={html} />
            <img src={html} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
