import styled from "styled-components";

export const ArtworkDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 0 250px;
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
  font-size: 20px;
  margin: 0;
`;

export const ArtworkWriterProfileWrapper = styled.div``;
export const ArtworkWriterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  button {
    padding: 5px 10px;
  }
`;

export const ArtworkContentWrapper = styled.div`
  margin-top: 20px;
`;
export const ArtworkDateWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
export const ArtworkDate = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    width: 28px;
    height: 28px;
  }
`;
