import styled from "styled-components";

export const UploadWrapper = styled.form`
  padding: 3rem 15.625rem;
  @media screen and (max-width: 1024px) {
    padding: 3rem 3.75rem;
  }
  @media screen and (max-width: 768px) {
    padding: 3rem 2.5rem;
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
