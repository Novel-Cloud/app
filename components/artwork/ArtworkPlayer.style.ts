import styled from "styled-components";

export const ArtworkPlayerWrapper = styled.div`
  position: relative;
  width: calc(100% - 500px);
  height: 550px;
  margin: 0 250px;
  border: 1px solid black;
  img {
    object-fit: cover;
  }
`;
