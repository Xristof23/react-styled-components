import styled from "styled-components";
const BoxWithStyledComponents = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};
  margin: 2rem;
  &:hover {
    background-color: red;
  }
`;

// function BoxWithStyledComponents({ $isBlack }) {
//   return <StyledBox $isBlack={$isBlack} />;
// }
export default BoxWithStyledComponents;
