import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import "./reset.css";

const Container = styled(motion.div)`
  background: linear-gradient(180deg, #d0e, #91f);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    font-family: sofia-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
  }
`;

const Cal = styled(motion.div)`
  height: 500px;
  background: white;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 10px;
`;

const Day = styled(motion.span)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
`;

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | undefined>(undefined);

  return (
    <Container animate={isVisible ? "visible" : "hidden"}>
      <button onClick={() => setIsVisible(true)}>Click me!</button>
      <Cal
        initial={{ scale: 0, rotate: 180 }}
        animate={
          isVisible && {
            scale: 1,
            rotate: 360,
            transition: {
              duration: 1
            }
          }
        }
      >
        {Array(31)
          .fill(0)
          .map((x, index) => {
            return (
              <Day
                variants={{
                  initial: {
                    background: "#ff000000",
                    borderRadius: "50%",
                    scale: 0.4
                  },
                  selected: {
                    background: "#ff0000ff",
                    transition: {
                      type: "spring"
                    }
                  },
                  unselected: {
                    background: "#fff"
                  }
                }}
                onClick={() => setSelectedDay(index)}
                key={index}
                animate={selectedDay === index ? "selected" : "unselected"}
                initial={selectedDay === index ? "initial" : "unselected"}
              >
                {index + 1}
              </Day>
            );
          })}
      </Cal>
    </Container>
  );
}
