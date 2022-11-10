import styled from "styled-components";
import { RotableBox } from "./RotableBox";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <AppContainer>
      <RotableBox src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTEVcrypslvdUeHleSabemh-hXNLNslN-H0XVxm7ObA2J28dKoXFD5zck7QPMjyHGBCWXhq2nmA4YA0IYslGIM" />
      <RotableBox src="https://www.collinsdictionary.com/images/full/kitten_101801980.jpg" />
    </AppContainer>
  );
}
