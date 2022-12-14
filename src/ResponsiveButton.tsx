import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Chevron from "./icons/Chevron";
import "./reset.css";

const Element = styled(motion.button)`
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  height: 50px;
  margin-bottom: 20px;
  width: 200px;
`;

const Text = styled.span`
  font-size: 20px;
`;

export const ResponsiveButton = () => {
  return (
    <Element
      whileHover={{
        backgroundColor: "#f00"
      }}
      whileTap={{
        scale: 2,
        backgroundColor: "#0f0",
        rotate: 100
      }}
      onClick={() => console.log("hola amigos y amigas")}
    >
      <motion.span
        initial={{ x: 0 }}
        animate={{
          x: 20,
          transition: {
            duration: 1
          }
        }}
      >
        Hello!
      </motion.span>
      <Chevron width={10} height={10} />
    </Element>
  );
};
