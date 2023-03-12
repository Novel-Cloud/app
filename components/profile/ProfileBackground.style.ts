import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  padding-right: 6.25rem;
  padding-bottom: 1.2rem;
  height: 15.625rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: white;
`;

export const BackgroundInfoWrapper = styled.div`
  display: flex;
  gap: 3.125rem;
  font-weight: 900;
  font-size: 1.25rem;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const BackgroundInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
