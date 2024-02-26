import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";

const StyledContainer = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <StyledContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </StyledContainer>
  );
}
