import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

const StyledHome = styled(motion.div)`
  /* [data-styled-component-toggle] {
    margin-bottom: 10px;
  } */

  display: flex;
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
`;

const StyledHomeC = styled(motion.div)`
  /* [data-styled-component-toggle] {
    margin-bottom: 10px;
  } */

  display: flex;
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
`;

function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function shuffle(array: any[]) {
  return array.sort(() => Math.random() - 0.5);
}

const spring = {
  // type: "spring",
  damping: 10,
  stiffness: 100,
  delay: 2,
  duration: 2
};
const boxVariant = {
  hidden: {
    x: "-100vw" //move out of the site
  },
  visible: {
    x: 0, // bring it back to nrmal
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2 //apply stagger on the parent tag
    }
  }
};

const listVariant = {
  hidden: {
    opacity: 0,
    height: 20,
    width: 20,
    background: "red"
  },
  visible: {
    x: 0, // bring it back to nrmal
    opacity: 1,
    height: 100,
    width: 20,
    background: "red"
  }
};

export default function App() {
  const XX = Array(20)
    .fill(0)
    .map((x, i) => (
      <motion.div variants={listVariant} key={i}>
        x
      </motion.div>
    ));

  return (
    <StyledHome>
      {XX.length > 0 && (
        <StyledHomeC variants={boxVariant} initial="hidden" animate="visible">
          {XX}
        </StyledHomeC>
      )}
    </StyledHome>
  );
}
