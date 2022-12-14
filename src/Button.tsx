import { motion } from "framer-motion";
import styled from "styled-components";
import "./reset.css";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Element = styled(motion.button)`
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  border: 0;
  margin-bottom: 20px;

  &[data-inview="true"] {
    background: black !important;
  }
`;
export const Button = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <Element
      data-inview={isInView}
      ref={ref}
      initial={{ background: "linear-gradient(180deg, #f0e, #f1f)" }}
      whileTap={{
        scale: 0.9
      }}
      whileHover={{
        background: "linear-gradient(90deg, #0f0, #f00)",
        transition: { duration: 1 }
      }}
    >
      Click me!
    </Element>
  );
};
