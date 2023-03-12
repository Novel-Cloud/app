import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  gap: 10rem;
  justify-content: center;
  padding: 11.25rem 0;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LoginTitle = styled.h1`
  font-size: 4rem;
  font-family: CookieRun-Regular;
  margin-top: 0;
  margin-bottom: 5.625rem;
`;
