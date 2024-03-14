import React, { useRef, useState } from "react";
import "../css/contact.css";
import git from "../../../images/git.png";
import fb from "../../../images/fb.png";
import upwork from "../../../images/upwork.png";
import whatsapp from "../../../images/whatsapp.png";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isHovered, setIsHovered] = useState(0);
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (!data.name) {
      enqueueSnackbar("Please enter your name", {
        variant: "error",
      });
    } else if (!data.email) {
      enqueueSnackbar("Please enter your email", {
        variant: "error",
      });
    } else if (!data.subject) {
      enqueueSnackbar("Please enter your subject", {
        variant: "error",
      });
    } else if (!data.message) {
      enqueueSnackbar("Please enter your message", {
        variant: "error",
      });
    } else if (!validEmail(data.email)) {
      enqueueSnackbar("Please enter a valid email", {
        variant: "error",
      });
    } else {
      setLoading(true);
      emailjs
        .sendForm("service_4otrg0k", "template_zndub6c", form.current, {
          publicKey: "GkdjZsqUWCvmUMxhw",
        })
        .then(
          () => {
            enqueueSnackbar(
              `Hi ${data.name}, Got your message! I'll reply you soon at ${data.email}.`,
              {
                variant: "success",
              }
            );
            setLoading(false);
            setData({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            enqueueSnackbar("Something went wrong", {
              variant: "error",
            });

            setLoading(false);

            setData({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          }
        );
    }
  };

  return (
    <div className="contactPage">
      <h1>Contact Me</h1>
      <div className="contactDetails">
        <form className="FormDiv" ref={form} onSubmit={sendEmail}>
          <input
            className="email"
            placeholder="Name"
            name="user_name"
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          />
          <input
            className="Heading"
            placeholder="Email"
            value={data.email}
            name="user_email"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
          <input
            className="Heading"
            placeholder="Subject"
            name="subject"
            value={data.subject}
            onChange={(e) => {
              setData({ ...data, subject: e.target.value });
            }}
          />
          <textarea
            className="message"
            placeholder="Message"
            name="message"
            value={data.message}
            onChange={(e) => {
              setData({ ...data, message: e.target.value });
            }}
          />
          <button>{loading ? "sending..." : "Send"}</button>
        </form>
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
                window.open("http://wa.me/+923168067371");
              }}
              src={whatsapp}
            />
            <img
              onClick={() => {
                window.open(
                  "https://www.facebook.com/profile.php?id=61550838426849&mibextid=ZbWKwL"
                );
              }}
              src={fb}
            />
            <img src={upwork} />
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
