import { motion } from "framer-motion";
import styled from "styled-components";
import { Button } from "./Button";
import "./reset.css";

const Container = styled(motion.div)`
  background: linear-gradient(180deg, #d0e, #91f);
  width: 100vw;
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
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </Container>
  );
}
