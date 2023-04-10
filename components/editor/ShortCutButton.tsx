import theme from "@/styles/theme";
import { HTMLProps, ReactNode } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface ShortCutButtonProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  idx: number;
  id: string;
}

export default function ShortCutButton({
  children,
  idx,
  id,
  ...props
}: ShortCutButtonProps) {
  return (
    <Draggable key={id} draggableId={idx.toString()} index={idx}>
      {(draggableProvided) => (
        <ToolbarButton>
          <div
            ref={draggableProvided.innerRef}
            {...props}
            {...draggableProvided.draggableProps}
            {...draggableProvided.dragHandleProps}
          >
            {children}
          </div>
        </ToolbarButton>
      )}
    </Draggable>
  );
}

const ToolbarButton = styled.div`
  white-space: nowrap;
  & > div {
    background-color: ${theme.secondary};
    padding: 6px 12px;
    border-radius: 10px;
  }
`;
