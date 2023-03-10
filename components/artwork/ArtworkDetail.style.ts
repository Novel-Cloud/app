import styled from "styled-components";

export const ArtworkDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.875rem;
  padding: 0 15.625rem;
`;
export const ArtworkTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const ArtworkTitle = styled.h1`
  margin: 0;
`;
export const ArtworkWriterName = styled.h3`
  font-size: 1.25rem;
  margin: 0;
`;

export const ArtworkWriterProfileWrapper = styled.div``;
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
`;
export const ArtworkDateWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
`;
export const ArtworkDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    width: 1.75rem;
    height: 1.75rem;
  }
`;
