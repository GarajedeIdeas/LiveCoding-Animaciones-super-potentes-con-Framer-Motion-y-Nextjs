import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import "./reset.css";

const Container = styled(motion.div)`
  font-size: 50px;
  background: linear-gradient(180deg, #d0e, #91f);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  * {
    font-family: sofia-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
  }
`;

const MyBox = styled(motion.div)`
  height: 100px;
  width: 100px;
  background-color: #f00;
`;

export default function App() {
  return (
    <Container>
      {Array(20)
        .fill(0)
        .map((x, i) => (
          <MyBox
            key={i}
            initial={{
              backgroundColor: "#0f0"
            }}
            animate={{
              backgroundColor: "#00f",
              scale: 2,
              opacity: Math.random(),
              rotate: Math.random() * 100,
              transition: {
                delay: 1,
                duration: 0.2
              }
            }}
          />
        ))}
    </Container>
  );
}
