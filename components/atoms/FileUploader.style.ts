import theme from "@/styles/theme";
import styled from "styled-components";

export const FileUploaderWrapper = styled.label<{ isDragActive: boolean }>`
  position: relative;
  display: block;
  object-fit: cover;
  width: 100%;
  filter: drop-shadow(0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25));
  background-color: ${(props) => (props.isDragActive ? "black" : "white")};
  height: 31.25rem;
  margin-top: 4rem;
  border: 2px solid ${theme.primary};
  border-radius: 0.625rem;
  cursor: pointer;
  img {
    opacity: 0.3;
    object-fit: cover;
  }
`;

export const FileUploadButton = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.primary};
  z-index: -100;
`;
