import { ShortCut } from "@/types/editor.interface";
import { deepcopy, reorder } from "@/utils/array";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import ShortCutButton from "../ShortCutButton";
import * as S from "../Toolbar.style";

interface ToolbarViewProps {
  shortCutList: ShortCut[];
  setShortCutList: Dispatch<SetStateAction<ShortCut[]>>;
  setIsChanged: Dispatch<SetStateAction<boolean>>;
}

export default function DragDropView({
  shortCutList,
  setShortCutList,
  setIsChanged,
}: ToolbarViewProps) {
  const [isEnabled, setIsEnabled] = useState(false);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    const copyedShortCutList = deepcopy<ShortCut[]>(shortCutList);
    setShortCutList(
      reorder<ShortCut>(copyedShortCutList, source.index, destination.index),
    );
    setIsChanged(true);
  };

  useEffect(() => {
    const animation = requestAnimationFrame(() => setIsEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setIsEnabled(false);
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="shortcut" direction="horizontal">
        {(droppableProvided) => (
          <S.Toolbar
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {shortCutList.map(({ content, shortcutId }, idx) => (
              <ShortCutButton
                key={idx}
                idx={idx}
                id={shortcutId?.toString() || ""}
                onMouseDown={(event) => {
                  event.preventDefault();
                  document.execCommand("insertText", false, content);
                }}
              >
                {content}
              </ShortCutButton>
            ))}
            {droppableProvided.placeholder}
          </S.Toolbar>
        )}
      </Droppable>
    </DragDropContext>
  );
}
