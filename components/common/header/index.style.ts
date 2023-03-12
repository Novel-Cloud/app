import theme from "@/styles/theme";
import styled from "styled-components";

export const HeaderMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const HeaderWrapper = styled.form<{ isOpen: boolean }>`
  position: relative;
  background-color: ${theme.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;
  filter: drop-shadow(0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25));

  #toggle_button {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 16px;
    ${HeaderMenuWrapper} {
      display: ${(props) => (props.isOpen ? "flex" : "none")};
      padding-bottom: ${(props) => (props.isOpen ? "16px" : "0")};
    }
    #toggle_button {
      display: block;
      position: absolute;
      top: 18px;
      right: 20px;
    }
  }
`;
