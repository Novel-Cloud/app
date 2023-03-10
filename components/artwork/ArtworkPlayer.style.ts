import styled from "styled-components";

export const ArtworkPlayerWrapper = styled.div`
  position: relative;
  width: calc(100% - 31.25rem);
  height: 34.375rem;
  margin: 0 15.625rem;
  border: 1px solid black;
  border-radius: 0.375rem;
  img {
    border-radius: 0.375rem;
    object-fit: cover;
  }
`;
