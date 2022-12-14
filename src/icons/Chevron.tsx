import styled from "styled-components";

const Icon = styled.svg``;

const Chevron = ({ ...props }) => (
  <Icon>
    <svg x="0px" y="0px" viewBox="0 0 840 425" {...props}>
      <g>
        <polygon points="840.02,-1 420,419.02 -0.02,-1 420,-6.66 	" />
      </g>
    </svg>
  </Icon>
);

export default Chevron;
