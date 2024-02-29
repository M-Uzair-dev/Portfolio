import React, { useEffect, useState } from "react";
import logo from "./../../../images/logo.png";
import "../css/loading.css";
import { motion } from "framer-motion";

const Loading = () => {
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloaded(true);
    }, 1500);
  }, []);

  return (
    <>
      {loaded ? (
        <></>
      ) : (
        <div className="loadingdiv">
          <img src={logo} />
          <motion.div
            className="first"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              loop: Infinity,
              ease: "linear",
            }}
          ></motion.div>
        </div>
      )}
    </>
  );
};

export default Loading;
