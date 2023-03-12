import styled from "styled-components";

export const UploadWrapper = styled.div`
  padding: 3rem 15.625rem;
  @media screen and (max-width: 1024px) {
    padding: 3rem 60px;
  }
  @media screen and (max-width: 768px) {
    padding: 3rem 40px;
  }
`;

export const UploadTitle = styled.h1`
  margin: 0;
  font-weight: 900;
  font-size: 3rem;
  margin-bottom: 3rem;
`;

export const ArtworkFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  gap: 0.75rem;
`;
