import { HTMLProps, ReactNode } from "react";
import { Draggable } from "react-beautiful-dnd";

interface ShortCutButtonProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  idx: number;
}

export default function ShortCutButton({
  children,
  idx,
  ...props
}: ShortCutButtonProps) {
  return (
    <Draggable key={idx.toString()} draggableId={idx.toString()} index={idx}>
      {(draggableProvided) => (
        <div
          ref={draggableProvided.innerRef}
          {...props}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
}
