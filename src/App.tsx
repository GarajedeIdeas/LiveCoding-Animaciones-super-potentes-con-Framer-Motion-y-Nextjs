import { motion } from "framer-motion";
import styled from "styled-components";
import { Box } from "./Box";

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function App() {
  return (
    <StyledHome>
      {Array(100)
        .fill(0)
        .map((_, i) => (
          <Box
            key={i}
            style={{
              position: "absolute",
              left: randomInt(0, window.innerWidth),
              top: randomInt(0, window.innerHeight)
            }}
          />
        ))}
    </StyledHome>
  );
}
