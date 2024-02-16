import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import "../css/sidebar.css";

const variants = {
  open: {
    clipPath: "circle(1200px at calc(100% - 50px) 50px)",
    transition: {
      duration: 3,
      type: "spring",
      easing: "easeOut",
    },
  },
  closed: {
    clipPath: "circle(30px at calc(100% - 60px) 60px)",
    transition: {
      duration: 0.8,
      // delay: 0.3,
      easing: "easeOut",
    },
  },
};
const variants2 = {
  open1: {
    transform: "rotate(45deg)",
    top: "50%",
    transition: {
      duration: 0.5,
      easing: "easeOut",
    },
  },
  closed1: {
    transform: "rotate(0deg)",
    top: "30%",
    transition: {
      duration: 0.5,
      easing: "easeOut",
    },
  },
  open2: {
    transform: "rotate(135deg)",
    top: "50%",
    left: "28%",
    width: "25px",
    transition: {
      duration: 0.5,
      easing: "easeOut",
    },
  },
  closed2: {
    transform: "rotate(0deg)",
    width: "18px",
    transition: {
      duration: 0.5,

      easing: "easeOut",
    },
  },
  open3: {
    width: "0px",
    transition: {
      duration: 0.5,
      easing: "easeOut",
    },
  },
  closed3: {
    width: "13px",
    transition: {
      duration: 0.5,
      easing: "easeOut",
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <motion.div className="button" onClick={() => setOpen(!open)}>
        <motion.div
          variants={variants2}
          className="one"
          animate={open ? "open1" : "closed1"}
        ></motion.div>
        <motion.div
          variants={variants2}
          className="two"
          animate={open ? "open2" : "closed2"}
        ></motion.div>
        <motion.div
          variants={variants2}
          className="three"
          animate={open ? "open3" : "closed3"}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
