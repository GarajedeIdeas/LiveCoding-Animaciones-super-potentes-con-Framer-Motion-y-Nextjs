import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

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
  flex-direction: column;

  button {
    margin-top: 100px;
  }
`;

const Circle = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background: white;
`;

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <StyledHome>
      {visible && <Circle />}
      {<button onClick={() => setVisible(!visible)}>Invisible</button>}
    </StyledHome>
  );
}
