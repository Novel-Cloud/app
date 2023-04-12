import styled from "styled-components";

export const ArtworkDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 6.25rem;
  max-width: 1024px;
  margin: 1.875rem auto;
  box-sizing: border-box;
  @media screen and (max-width: 1024px) {
    padding: 0 3.75rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

export const ArtworkTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const ArtworkTitle = styled.h1`
  margin: 0;
`;

export const ArtworkWriterName = styled.h3`
  font-size: 1.25rem;
  margin: 0;
`;

export const ArtworkWriterProfileWrapper = styled.div``;
export const ArtworkOnClickWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
`;
export const ArtworkWriterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-top: 1rem;
  button {
    padding: 0.375rem 0.625rem;
  }
`;

export const ArtworkContentWrapper = styled.div`
  margin-top: 1.25rem;
  word-break: break-all;
`;
export const ArtworkDateWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
`;
export const ArtworkDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  user-select: none;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
