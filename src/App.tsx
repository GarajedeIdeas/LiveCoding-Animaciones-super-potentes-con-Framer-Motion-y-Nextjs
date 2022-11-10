import { motion } from "framer-motion";
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

export default function App() {
  return (
    <StyledHome>
      <section className="funds__Container-sc-f8adb1ab-0 ghpPeB">
        <h2 className="ContentHeading-sc-69ab857c-0 bmlHEs">Total so far</h2>
        <p className="ContentSubHeading-sc-bb5ff6a3-0 fWkjVL">
          This is the total amount of money raised so far.
        </p>
        <section>
          <div>
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
                <path
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
                ></path>
                <path
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
                ></path>
              </svg>
              <ChartText>
                <h2>Total Funds Requested</h2>
                <p>200.000$</p>
              </ChartText>
            </Chart>
          </div>
        </section>
      </section>
    </StyledHome>
  );
}
