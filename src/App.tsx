import { motion } from "framer-motion";
import styled from "styled-components";
import Toggle from "./Toggler";

const StyledHome = styled(motion.div)`
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

  ${Toggle.Element} {
    margin-bottom: 10px;
  }
`;

export default function App() {
  return <StyledHome></StyledHome>;
}
