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
  color: ${theme.primary};
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
  top: 0px;
  left: 8px;
  margin: 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  z-index: 50;
  padding: 0;
  border-radius: 10px;
  & > li:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  & > li:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
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
  list-style: none;
  &:hover {
    background-color: ${theme.secondary};
  }

  & > span {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
`;

export default { Provider, Menu, Item };
