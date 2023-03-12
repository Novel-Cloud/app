import styled from "styled-components";

export const ButtonListWrapper = styled.div`
  position: absolute;
  top: -2.5rem;
  margin-left: 7rem;
  button {
    margin-right: 1.25rem;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 5rem;
  }

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`;
