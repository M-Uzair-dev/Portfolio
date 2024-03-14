import React, { useState } from "react";
import "../css/contact.css";
import git from "../../../images/git.png";
import fb from "../../../images/fb.png";
import upwork from "../../../images/upwork.png";
import whatsapp from "../../../images/whatsapp.png";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
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
            {[1, 2, 3].map((e, index) => {
              return (
                <>
                  {e === 1 ? (
                    <>
                      <motion.div
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ delay: index * 0.4 }}
                        viewport={{ once: true }}
                        key={index}
                        className={`textinContact ${
                          isHovered !== 1 && isHovered !== 0
                            ? "greyText"
                            : "whiteText"
                        }`}
                        onMouseEnter={() => setIsHovered(1)}
                        onMouseLeave={() => setIsHovered(0)}
                        onClick={() => {
                          navigator.clipboard.writeText("Uzair Manan");
                          enqueueSnackbar("Text copied !", {
                            variant: "success",
                          });
                        }}
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
                      </motion.div>
                    </>
                  ) : e === 2 ? (
                    <>
                      <motion.p
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ delay: index * 0.4 }}
                        viewport={{ once: true }}
                        key={index}
                        className={`textinContact ${
                          isHovered !== 2 && isHovered !== 0
                            ? "greyText"
                            : "whiteText"
                        }`}
                        onMouseEnter={() => setIsHovered(2)}
                        onMouseLeave={() => setIsHovered(0)}
                        onClick={() => {
                          navigator.clipboard.writeText(
                            "uzairmanan3@gmail.com"
                          );
                          enqueueSnackbar("Text copied !", {
                            variant: "success",
                          });
                        }}
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
                      </motion.p>
                    </>
                  ) : (
                    <>
                      <motion.div
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ delay: index * 0.4 }}
                        viewport={{ once: true }}
                        key={index}
                        className={`textinContact ${
                          isHovered !== 3 && isHovered !== 0
                            ? "greyText"
                            : "whiteText"
                        }`}
                        onMouseEnter={() => setIsHovered(3)}
                        onMouseLeave={() => setIsHovered(0)}
                        onClick={() => {
                          navigator.clipboard.writeText("+92 316 8067371");
                          enqueueSnackbar("Text copied !", {
                            variant: "success",
                          });
                        }}
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
                      </motion.div>
                    </>
                  )}
                </>
              );
            })}
          </div>
          <div className="socialicons">
            <img
              onClick={() => {
                window.open("https://github.com/M-Uzair-dev");
              }}
              src={whatsapp}
            />
            <img
              onClick={() => {
                window.open("https://github.com/M-Uzair-dev");
              }}
              src={fb}
            />
            <img
              onClick={() => {
                window.open("https://github.com/M-Uzair-dev");
              }}
              src={upwork}
            />
            <img
              onClick={() => {
                window.open("https://github.com/M-Uzair-dev");
              }}
              src={git}
              style={{ filter: "invert(1)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
