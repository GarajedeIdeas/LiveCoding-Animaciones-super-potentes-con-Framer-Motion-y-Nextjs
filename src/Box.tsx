import { HTMLMotionProps, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const Element = styled(motion.div)`
  height: 100px;
  width: 100px;
  /* border: 1px solid black; */
`;

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

type Props = HTMLMotionProps<"div"> & { dani?: string };

export const Box: React.FC<Props> = ({ ...props }) => {
  const [duration] = useState(randomInt(1, 4));

  return (
    <div>
      <Element
        {...props}
        initial={{ x: 0, y: 0 }}
        animate={{
          x: randomInt(-window.innerWidth, window.innerWidth),
          y: randomInt(-window.innerHeight, window.innerHeight),
          rotate: [null, 100, 200, 30],
          borderRadius: ["0%", "50%", "0%", "50%"],
          scale: 2,
          backgroundColor: [
            "#fff",
            "#fff",
            "#fff",
            `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, 1)`
          ]
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          delay: 2,
          duration,
          times: [0, 0.2, 1],
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </div>
  );
};
