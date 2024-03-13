import { motion } from "framer-motion";
import { Link } from "react-scroll";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1, fontWeight: 450 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={item} smooth={true} duration={500}>
            {item}
          </Link>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
