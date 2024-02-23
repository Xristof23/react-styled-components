import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
const StyledHeader3 = styled.h3`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 1.25rem;
`;

const StyledDescription = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
`;

export default function Card() {
  return (
    <StyledCard>
      <StyledHeader3 className="card__title">Homer Simpson</StyledHeader3>
      <StyledDescription>
        Homer Jay Simpson is a fictional character and the main protagonist of
        the American animated sitcom The Simpsons. He is voiced by Dan
        Castellaneta and first appeared, along with the rest of his family, in
        The Tracey Ullman Show short Good Night on April 19, 1987.
      </StyledDescription>
    </StyledCard>
  );
}
