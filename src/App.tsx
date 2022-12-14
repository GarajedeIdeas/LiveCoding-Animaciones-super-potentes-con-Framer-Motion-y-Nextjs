import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Chevron from "./icons/Chevron";
import "./reset.css";
import { ResponsiveButton } from "./ResponsiveButton";

const Container = styled(motion.div)`
  background: linear-gradient(180deg, #d0e, #91f);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  * {
    font-family: sofia-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
  }
`;

export default function App() {
  return (
    <Container>
      <Chevron height={200} id="hola" />
      <ResponsiveButton />
      <ResponsiveButton />
      <ResponsiveButton />
    </Container>
  );
}
