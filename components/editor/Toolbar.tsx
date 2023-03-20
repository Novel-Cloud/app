import { EditButtonArgument, ShortCut } from "@/types/editor.interface";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { deepcopy, reorder } from "@/utils/array";
import ToolbarButtonView from "./ToolbarButton";
import * as S from "./Toolbar.style";
import ShortCutButton from "./ShortCutButton";
import ShortCutIcon from "../icons/editor/ShortCutIcon";

interface ToolbarViewProps {
  editButtonArgumentList: EditButtonArgument[];
  shortCutList: ShortCut[];
  setShortCutList: Dispatch<SetStateAction<ShortCut[]>>;
}

export default function ToolbarView({
  editButtonArgumentList,
  shortCutList,
  setShortCutList,
}: ToolbarViewProps) {
  const [isEnabled, setIsEnabled] = useState(false);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    const copyedShortCutList = deepcopy<ShortCut[]>(shortCutList);
    setShortCutList(
      reorder<ShortCut>(copyedShortCutList, source.index, destination.index),
    );
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
    <S.ToolbarWrapper>
      <S.Toolbar>
        {editButtonArgumentList.map((editButtonArgument, idx) => (
          <ToolbarButtonView key={idx} {...editButtonArgument} />
        ))}
      </S.Toolbar>
      <S.Toolbar>
        <S.ShortCutIconWrapper>
          <ShortCutIcon />
        </S.ShortCutIconWrapper>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="shortcut" direction="horizontal">
            {(droppableProvided) => (
              <S.Toolbar
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
              >
                {shortCutList.map(({ content, id }, idx) => (
                  <ShortCutButton
                    key={idx}
                    idx={idx}
                    id={id.toString()}
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
      </S.Toolbar>
    </S.ToolbarWrapper>
  );
}
