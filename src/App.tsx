import { motion } from "framer-motion";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { getAnimationProps } from "./utils";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  height: 500px;
  width: 500px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
`;

const RotableBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ValueChanged = styled.input`
  position: relative;
  z-index: 100;
  cursor: grab;
`;

export default function App() {
  const [rotation, setRotation] = useState(0);

  return (
    <AppContainer>
      <RotableBox>
        <Box
          animate={getAnimationProps(1, rotation)}
          transition={{
            duration: 1
          }}
        />
        <ValueChanged
          type="range"
          min="0"
          max="360"
          value={rotation}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setRotation(parseInt(e.target.value));
          }}
        />
      </RotableBox>
    </AppContainer>
  );
}
