import styled from "styled-components";

export const ArtworkPlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  filter: drop-shadow(0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25));
  img {
    border-radius: 0.375rem;
    padding: 0 6.25rem;
    box-sizing: border-box;
    object-fit: cover;
    @media screen and (max-width: 1024px) {
      padding: 0 3.75rem;
    }
    @media screen and (max-width: 768px) {
      padding: 0 1.25rem;
    }
  }
`;
