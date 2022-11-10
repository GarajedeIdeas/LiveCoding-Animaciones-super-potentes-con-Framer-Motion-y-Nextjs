import { motion, Transition, Variants } from "framer-motion";
import styled from "styled-components";
import Toggle from "./Toggler";

const StyledHome = styled(motion.div)`
  display: flex;
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
  flex-direction: column;

  button {
    margin-top: 100px;
  }

  ${Toggle.Element} {
    margin-bottom: 10px;
  }
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ChartText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 200px; */
  position: absolute;
  font-size: 12px;
  flex-direction: column;

  p {
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Boxes = styled(motion.div)`
  margin-left: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 30px;
`;

const Box = styled(motion.div)`
  height: 100px;
  width: 100px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
`;

const All = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const StyledH2 = styled.h2`
  font-size: 30px;
  text-align: center;
`;

const BoxVariants: Variants = {
  hide: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1
    }
  }
};

const ChildVariants = {
  hide: {
    opacity: 0,
    y: -50
  },
  show: {
    opacity: 1,
    y: 0
  }
};

export default function App() {
  return (
    <StyledHome>
      <section className="funds__Container-sc-f8adb1ab-0 ghpPeB">
        <All>
          <div>
            <StyledH2 className="ContentHeading-sc-69ab857c-0 bmlHEs">Total so far</StyledH2>
            <p className="ContentSubHeading-sc-bb5ff6a3-0 fWkjVL">
              This is the total amount of money raised so far.
            </p>
            <Chart>
              <svg width="294" height="294" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="147"
                  cy="147"
                  r="135"
                  stroke-width="24"
                  fill="none"
                  stroke="#E9EDF9"
                ></circle>
                <motion.path
                  role="graphics-symbol"
                  aria-label="$19,694,605"
                  d="M 146.99805072926213 287.99999998652606 A 141 141 0 1 0 147 6"
                  stroke-width="12"
                  stroke-linecap="round"
                  fill="none"
                  stroke="#EC4699"
                  pathLength="1"
                  stroke-dashoffset="0px"
                  stroke-dasharray="1px 1px"
                  data-projection-id="34"
                  initial={{ pathLength: 0, stroke: "#EC4699" }}
                  animate={{ pathLength: 1, stroke: "#0000ff" }}
                  transition={{ duration: 3 }}
                ></motion.path>
                <motion.path
                  role="graphics-symbol"
                  aria-label="$18,696,854"
                  d="M 135.5025754486223 6.469543412520807 A 141 141 0 0 0 135.50063267024018 287.53029762658036"
                  stroke="#133FF0"
                  stroke-width="12"
                  stroke-linecap="round"
                  fill="none"
                  pathLength="1"
                  stroke-dashoffset="0px"
                  stroke-dasharray="1px 1px"
                  data-projection-id="36"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, stroke: "#ff0000" }}
                  transition={{ duration: 3, delay: 1 }}
                ></motion.path>
              </svg>
              <ChartText>
                <h2>Total Funds Requested</h2>
                <p>200.000$</p>
              </ChartText>
            </Chart>
          </div>
          <Boxes variants={BoxVariants} initial="hide" animate="show">
            <Box variants={ChildVariants}>
              <h1>Data</h1>
              <p>100%</p>
            </Box>
            <Box variants={ChildVariants}>
              <h1>Data</h1>
              <p>100%</p>
            </Box>
            <Box variants={ChildVariants}>
              <h1>Data</h1>
              <p>100%</p>
            </Box>
            <Box variants={ChildVariants}>
              <h1>Data</h1>
              <p>100%</p>
            </Box>
            <Box variants={ChildVariants}>
              <h1>Data</h1>
              <p>100%</p>
            </Box>
            <Box variants={ChildVariants}>
              <h1>Data</h1>
              <p>100%</p>
            </Box>
            <Box variants={ChildVariants}>
              <h1>Data</h1>
              <p>100%</p>
            </Box>
          </Boxes>
        </All>
      </section>
    </StyledHome>
  );
}
