import { HTMLMotionProps, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const dimensions = 50;
const padding = 10;
const w = 500;

const Element = styled(motion.div)`
  width: ${w}px;
  height: ${dimensions}px;
  padding: ${padding}px ${padding / 2}px;
  border-radius: 20px;
  background: white;
  cursor: pointer;
`;

const Toggler = styled(motion.div)`
  width: ${dimensions}px;
  height: 100%;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

type Props = HTMLMotionProps<"div">;
type Cust<Props> = React.FC<Props> & { Element: any };

const Toggle: Cust<Props> = () => {
  const [visible, setVisible] = useState(true);

  return (
    <Element
      onClick={() => setVisible(!visible)}
      animate={{ backgroundColor: !visible ? "#ffffff33" : "#ffffffff" }}
    >
      <Toggler
        animate={{
          x: visible ? w - dimensions - padding : 0
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </Element>
  );
};

Toggle.Element = Element;

export default Toggle;
