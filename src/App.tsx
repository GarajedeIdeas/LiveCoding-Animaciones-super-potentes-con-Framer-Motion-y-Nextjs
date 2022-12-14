import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import "./reset.css";
import Logo from "./Logo";

const Container = styled(motion.ul)`
  height: 100vh;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const logosVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 1
    }
  }
};

const logoVariant: Variants = {
  whileTap: { scale: 2, rotateX: 180 },
  hidden: { opacity: 0, y: 0 },
  visible: {
    rotate: 360,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
};

export default function App() {
  return (
    <Container variants={logosVariants} initial="hidden" animate="visible">
      <motion.li key={1} variants={logoVariant} whileTap="whileTap">
        <Logo height="300" whileHover={{ opacity: 0 }} />
      </motion.li>
      <motion.li key={2} variants={logoVariant} whileTap="whileTap">
        <Logo height="400" />
      </motion.li>
      <motion.li key={3} variants={logoVariant} whileTap="whileTap">
        <Logo height="500" />
      </motion.li>
    </Container>
  );
}
