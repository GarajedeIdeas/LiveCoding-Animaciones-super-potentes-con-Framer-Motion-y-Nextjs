import { motion } from "framer-motion";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { getAnimationProps } from "./utils";

const Box = styled(motion.div)`
  height: 500px;
  width: 500px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRotableBox = styled.div`
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

type Props = {
  src: string;
};

export const RotableBox: React.FC<Props> = ({ src }) => {
  const [rotation, setRotation] = useState(0);

  return (
    <StyledRotableBox>
      <Box
        animate={getAnimationProps(1, rotation)}
        transition={{
          duration: 1
        }}
      >
        <img src={src} alt="" style={{ height: window.innerWidth < 500 ? 100 : 200 }} />
      </Box>
      <ValueChanged
        type="range"
        min="0"
        max="360"
        value={rotation}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setRotation(parseInt(e.target.value));
        }}
      />
    </StyledRotableBox>
  );
};
