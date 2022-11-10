import { motion } from "framer-motion";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const StyledHome = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
  overflow: hidden;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  height: 500px;
  width: 500px;
  border: 1px solid black;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
type Point = {
  x: number;
  y: number;
};

export default function App() {
  const [coords, setCoords] = useState<Point>({ x: 0, y: 0 });
  const { x, y } = coords;

  return (
    <StyledHome>
      <Box
        initial={{ x, y }}
        animate={{ x, y, rotate: x > 100 ? x : 0 }}
        transition={{ type: "spring" }}
      />

      <Controls>
        <input
          type="range"
          min="0"
          max="200"
          value={coords.x}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCoords({ ...coords, x: +e.target.value })
          }
        />

        <input
          type="range"
          min="0"
          max="200"
          value={coords.y}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCoords({ ...coords, y: +e.target.value })
          }
        />
      </Controls>
    </StyledHome>
  );
}
