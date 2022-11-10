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
  border: 1px solid #8b1bbc;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  top: 100px;
  left: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 300px;
  }
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
      >
        <img
          src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRS7Outpkdd8Ir9TmzQnF5HxJr6nIhJIl2Cgp0mkLtlzF4zSRCx5Wa2bbKkgkUbp741Rso7ZYl90gzJmke9bkE"
          alt=""
        />
      </Box>

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
