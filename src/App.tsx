import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

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

const ColorBox = styled(motion.div)`
  height: 400px;
  width: 200px;
  border-radius: 20px;
  background: red;
`;

const StyledHome = styled(motion.div)`
  /* [data-styled-component-toggle] {
    margin-bottom: 10px;
  } */

  display: flex;
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
  height: 100vh;
  flex-wrap: wrap;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  ${ColorBox} {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const StyledC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const C: React.FC = () => {
  const [colorValue, setColorValue] = useState(0);

  return (
    <StyledC>
      <ColorBox
        animate={{ background: `rgb(${colorValue}, 0, 0)` }}
        transition={{ type: "spring" }}
      />

      <input
        type="range"
        min="0"
        max="255"
        value={colorValue}
        onChange={(e) => setColorValue(+e.target.value)}
      />
      {colorValue}
    </StyledC>
  );
};

export default function App() {
  return (
    <StyledHome>
      <C />
      <C />
      <C />
    </StyledHome>
  );
}
