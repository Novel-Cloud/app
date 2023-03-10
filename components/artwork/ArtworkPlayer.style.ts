import styled from "styled-components";

export const ArtworkPlayerWrapper = styled.div`
  position: relative;
  width: calc(100% - 500px);
  height: 550px;
  margin: 0 250px;
  border: 1px solid black;
  border-radius: 6px;
  img {
    border-radius: 6px;
    object-fit: cover;
  }
`;
