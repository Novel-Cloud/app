import useOutsideClick from "@/hooks/useOutsideClick";
import { HTMLProps, useState } from "react";
import styled from "styled-components";
import theme from "@/styles/theme";
import KebabIcon from "../icons/KebabIcon";

function Provider({ children }: HTMLProps<HTMLDivElement>) {
  const [isOpen, setIsOpen] = useState(false);

  const { ref } = useOutsideClick<HTMLDivElement>({
    click: () => setIsOpen(false),
  });

  return (
    <ProviderWrapper ref={ref} onClick={() => setIsOpen((prev) => !prev)}>
      <KebabIcon />
      {isOpen && children}
    </ProviderWrapper>
  );
}

const ProviderWrapper = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
  svg {
    &:hover {
      opacity: 0.5;
    }
  }
`;

function Menu({ children }: HTMLProps<HTMLUListElement>) {
  return <MenuWrapper>{children}</MenuWrapper>;
}

const MenuWrapper = styled.ul`
  position: absolute;
  top: 24px;
  right: 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  z-index: 50;
`;

function Item({ children, onClick }: HTMLProps<HTMLLIElement>) {
  return (
    <ItemWrapper>
      <span className="" onClick={onClick}>
        {children}
      </span>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.li`
  cursor: pointer;
  background-color: white;
  padding: 10px 0.3125rem;

  &:hover {
    background-color: ${theme.primary};
  }

  & > span {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
`;

export default { Provider, Menu, Item };
