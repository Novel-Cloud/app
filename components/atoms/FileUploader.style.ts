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
  img {
    opacity: 0.3;
    object-fit: cover;
  }
`;

export const FileUploadButton = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: ${theme.secondary};
  color: ${theme.primary};
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  border-radius: 0.625rem;
  font-size: 0.875rem;
  filter: drop-shadow(0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25));
  z-index: -10;
`;
