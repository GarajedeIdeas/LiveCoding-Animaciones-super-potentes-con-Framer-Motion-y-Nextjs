import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import "./reset.css";

const Container = styled(motion.div)`
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
  background: silver;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 5px black;
  margin-bottom: 5px;
`;

const DrodownOptions = styled(motion.ul)`
  background: silver;
  padding: 10px;
  width: 100%;

  li {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
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
    opacity: 1,
    color: "green"
  }
};

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container animate={isVisible ? "visible" : "hidden"}>
      <DropDown>
        <DrodownHeader onClick={() => setIsVisible(!isVisible)}>Click me</DrodownHeader>

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
