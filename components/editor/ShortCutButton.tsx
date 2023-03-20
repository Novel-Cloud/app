import { HTMLProps, ReactNode } from "react";
import { Draggable } from "react-beautiful-dnd";

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
    <Draggable key={id} draggableId={id} index={idx}>
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
