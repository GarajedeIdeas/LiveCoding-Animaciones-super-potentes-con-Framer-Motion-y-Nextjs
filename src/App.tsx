import { AnimatePresence, motion, Variants } from "framer-motion";
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
const DropDown = styled(motion.div)`
  position: relative;
  width: 200px;
`;

const DrodownHeader = styled(motion.div)`
  background: white;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 5px black;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DrodownOptions = styled(motion.ul)`
  background: white;
  padding: 10px;
  width: 100%;

  li {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TickWrapper = styled(motion.div)`
  transform-origin: center center;
`;

const Tick = styled(motion.svg)`
  height: 8px;
`;

const DrodownOption = styled(motion.li)``;

const drodownOptionsVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      duration: 1,
      staggerChildren: 0.5
    }
  }
};

const drodownOptionsVariant: Variants = {
  hidden: {
    x: 0,
    opacity: 0
  },
  visible: {
    x: 10,
    opacity: 1
  }
};

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container animate={isVisible ? "visible" : "hidden"}>
      <DropDown>
        <DrodownHeader onClick={() => setIsVisible(!isVisible)}>
          <span>Click me</span>
          <TickWrapper
            animate={
              isVisible
                ? {
                    rotate: 180,
                    transition: {
                      delay: 0.25
                    }
                  }
                : {
                    rotate: 0
                  }
            }
          >
            <Tick viewBox="0 0 614 309.07" height="8">
              <g>
                <polygon points="1.15,0.5 606.85,0.5 304,303.35 	" />
              </g>
            </Tick>
          </TickWrapper>
        </DrodownHeader>

        <AnimatePresence>
          <DrodownOptions variants={drodownOptionsVariants} initial={false}>
            {["Option 1", "Option 2", "Option 3"].map((option) => (
              <DrodownOption variants={drodownOptionsVariant}>{option}</DrodownOption>
            ))}
          </DrodownOptions>
        </AnimatePresence>
      </DropDown>
    </Container>
  );
}
